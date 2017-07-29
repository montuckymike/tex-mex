import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/AboutUs"> About Us </Link> </li>
        <li> <Link to="/Menu"> Menu </Link> </li>
      </ul>
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/Menu" component={Menu} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
), document.getElementById("root"));
