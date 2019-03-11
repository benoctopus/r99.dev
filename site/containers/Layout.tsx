import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import "../styles/layout.scss";
import Sidebar from "./Sidebar";

// interface LayoutProps {
//   children: JSX.Element;
// }

const Layout = () => (
  <div className="layout-root">
    <AppBar className="header-root" position="static" elevation={12}>
      <Typography component="h1" className="header-title">
        _Slick
      </Typography>
    </AppBar>
    <div className="layout-body-container">
      <Sidebar></Sidebar>
    </div>
  </div>
);

export default Layout;
