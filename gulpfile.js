const gulp = require('gulp');
const { spawn } = require('child_process');
const { log } = require('gulp-util');
const path = require('path');
require('colors');

const clientPath = path.join(__dirname, 'portfolio99');
const proxPath = path.join(__dirname, 'prox');

const logOutput = (p, outColor = 'white') => {
  if (!p) throw new Error('logOutput was not passed a ChildProcess');

  p.stdout.on('data', (chunk) => process.stdout.write(chunk.toString()[outColor]));
  p.stdout.on('error', (chunk) => process.stdout.write(chunk.toString().red));
  p.stderr.on('data', (chunk) => process.stdout.write(chunk.toString().red));
  p.stderr.on('error', (chunk) => process.stdout.write(chunk.toString().red));
};

const spawnPromise = (cmd, ...argv) => new Promise(resolve => {
  let args = [];
  let opts = undefined;
  let verb = false;
  let outColor = 'white';

  if (argv && argv.length) argv.forEach(a => {
    if (typeof a == 'boolean')
      verb = a;
    else if (typeof a == 'string')
      outColor = a;
    else if (a instanceof Array)
      args = a;
    else if (a instanceof Object)
      opts = a;
    else
      throw new Error(`invalid argument for spawnPromise: ${a}`);
  });

  const p = spawn(cmd, args, opts);

  if (process.env.VERBOSE === 'true' || verb)
    logOutput(p, outColor);

  p.on('close', (code) => {
    if (code > 1) {
      log(`-- Process exited with code: ${code} --\n`.red);
      log(opts.cwd, cmd, args.join(' ').red);
    }
    resolve();
  });

});

gulp.task('install-prox', () => (
  spawnPromise('npm', ['install'], { cwd: proxPath })
));

gulp.task('install-client', () => (
  spawnPromise('npm', ['install'], { cwd: clientPath })
));

gulp.task('dev-prox', () => (
  spawnPromise(
    'npm',
    true,
    ['run', 'dev'],
    { cwd: proxPath }
  )
));

gulp.task('dev-client', () => (
  spawnPromise('npm', true, ['run', 'dev'], { cwd: clientPath })
));

gulp.task(
  'install',
  gulp.parallel(
    'install-client',
    'install-prox'
  )
);

gulp.task(
  'dev',
  gulp.parallel(
    'dev-client',
    'dev-prox'
  )
);
