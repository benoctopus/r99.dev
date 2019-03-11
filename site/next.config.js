const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');


module.exports = withSass(withTypescript());

module.exports.exportPathMap = () => {
  return {
    '/': { page: '/' },
    '/shop': { page: '/shop' }
  };
};