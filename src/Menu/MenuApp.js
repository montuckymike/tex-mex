import React from "react";
import DATA from "./DATA.js";
import 'bootstrap/dist/css/bootstrap.css';
import MenuHero from "./MenuHero";
import MenuItems from "./MenuItems";

// New Shit below ///////////////////////////

// class Child extends React.Component {
//   render() {
//     return (
//       <div>
//         <MenuItems />
//       </div>);
//   }
// }
//
// class ShowHide extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       childVisible: false
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <div onClick={() => this.onClick()}>
//           Parent - click me to show/hide my child
//         </div>
//         {
//           this.state.childVisible
//             ? <Child />
//             : null
//         }
//       </div>
//     )
//   }
//
//   onClick() {
//     this.setState({childVisible: !this.state.childVisible});
//   }
// };
//
// React.render(){
//     <div>
//       <ShowHide />
//       <MenuHero />
//       <MenuItems />
//     </div>
//   }, document.getElementById('container');




// New shit above ///////////////////////////





const MenuApp = () => {
  return (
    <div>
      <MenuHero />
      <MenuItems />
    </div>
  )
}


export default MenuApp
