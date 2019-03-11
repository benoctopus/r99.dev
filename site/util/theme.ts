import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c6bc0",
      light: " #8e99f3",
      dark: "#26418f",
    },
    secondary: {
      main: "#7e57c2",
      light: "#b085f5",
      dark: "#4d2c91",
    },
    // bg: {
    //   mid: "#E0E1E0",
    //   light: "#F5F5F6",
    //   dark: "#575757",
    // },
  },
  typography: {
    useNextVariants: true,
    // color: "white",
  },
});

export default Theme;
