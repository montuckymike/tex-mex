import React from "react";
import DATA from "./DATA.js";
import 'bootstrap/dist/css/bootstrap.css';

const MenuApp = () => {
  const menuItems = DATA.items.map(function(item){
  return(
      <div className="menu-item">
        <div className="thumbnail">
          <img src={ item.img } />
          <div className="caption">
            <h3> { item.name } </h3>
            <p> { item.price } </p>
            <p> { item.spiceLevel } </p>
            <p> { item.category } </p>
            <p> <a href="#" className="btn btn-primary" role="button">Order</a></p>
          </div>
        </div>
      </div>
  )
})
  return(
    <div className="menu-container">
      {menuItems}
    </div>
  )
}

export default MenuApp
