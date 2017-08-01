import React from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUsApp from './AboutUs/AboutUsApp';
import MenuApp from "./Menu/MenuApp";

const Home = () => {
  return(
    <div className="jumbotron">
      <h1> Hello from home </h1>
    </div>
  )
}




ReactDOM.render((
  <Router>
    <div>
      <NavBar />
        <div className="index">
          <Route exact path="/" component={Home} />
          <Route path="/AboutUs" component={AboutUsApp} />
          <Route path="/Menu" component={MenuApp} />
        </div>
    </div>
  </Router>
), document.getElementById('root'));
