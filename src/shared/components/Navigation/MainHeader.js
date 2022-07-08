import React from "react";

import "./MainHeader.css";

const MainNavigation = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default MainNavigation;
