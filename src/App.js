import React, { Component } from 'react';
import "./App.css";
import {NavBar, Menu, AboutUs } from "./components";
import "./components/styles.css";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <Menu />
        <AboutUs />
      </div>
    )
  }
}



export default App;
