import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import Nav from "./containers/MenuAppBar";
const MyNav = withRouter(Nav);

const NavTop = () => (
  <Router>
    <div>
      <MyNav />
    </div>
  </Router>
);

export default NavTop;
