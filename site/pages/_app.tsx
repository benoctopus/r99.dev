import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core';
import theme from '../util/theme';
import '../styles/default.scss';

class CustomApp extends App {
  render = () => {
    const { Component } = this.props;
    return (
      <Container>
        <MuiThemeProvider theme={theme}>
          <Component></Component>
        </MuiThemeProvider>
      </Container>
    )
  }
}

export default CustomApp;