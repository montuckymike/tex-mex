import React from "react";
import DATA from "./DATA.js";
import 'bootstrap/dist/css/bootstrap.css';




const MenuApp = () => {
  const convertIntoCurrency = (N) => {N=parseFloat(N);if(!isNaN(N))N=N.toFixed(2);else N='0.00';return "$"+N;};
  const convertToPercentage = (V) => {
    return V / 10
  }
  const menuItems = DATA.items.map(function(item){
  return(
      <div className="menu-item">
        <div className="thumbnail">
          <img src={ item.img } />
          <div className="caption">
            <h3> { item.name } </h3>
            <p> <strong>Price: {convertIntoCurrency(item.price)}</strong></p>

            <div className="progress">
              <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow= {item.spiceLevel} aria-valuemin="0" aria-valuemax="100" style={{"width": convertToPercentage(item.spiceLevel) }}>
                <span className="sr-only"> Spice Level </span>
              </div>
            </div>


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
