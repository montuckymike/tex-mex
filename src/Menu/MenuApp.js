import React from "react";
import DATA from "./DATA.js";
import 'bootstrap/dist/css/bootstrap.css';
import MenuHero from "./MenuHero";
import MenuItems from "./MenuItems";

// New Shit below ///////////////////////////


// New shit above ///////////////////////////

class Child extends React.Component {
  render() {
    return (
      <div>
        <MenuItems />
      </div>);
  }
}
class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }

  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }

  render() {
    return (
      <div>
        <div onClick={() => this.onClick()}>
          <button>Show All Food </button>
        </div>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    )
  }
};


const MenuApp = () => {
  return (
    <div>
      <MenuHero />
      <ShowHide />

    </div>
  )
}


export default MenuApp
