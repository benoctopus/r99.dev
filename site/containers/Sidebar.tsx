import React from "react";
import "../styles/sidebar.scss";
import { Paper } from '@material-ui/core';
import SidebarChannels from "./SidebarChannels";
import SidebarGroups from './SidebarGroups';

const Sidebar = () => (
  <Paper
    classes={{ root: "sidebar-root" }}
    square
    elevation={20}
  >
    <SidebarGroups />
    <SidebarChannels />
  </Paper >
);

export default Sidebar;
