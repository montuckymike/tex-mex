import React from "react";
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUsApp from './AboutUs/AboutUsApp';
import App from "./App";
import MenuHero from "./components/MenuHero";


const Home = () => {
  return(
    <div>
      <MenuHero />
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
          <Route exact path="/" component={App} />
        </div>
    </div>
  </Router>
), document.getElementById('root'));
