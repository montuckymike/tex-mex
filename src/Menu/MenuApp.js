import React from "react";
import DATA from "./DATA.js";
import 'bootstrap/dist/css/bootstrap.css';


var price = "https://cdn4.iconfinder.com/data/icons/banking-icons-3/100/1-512.png"

const MenuApp = () => {

  const convertIntoCurrency = (N) => {N=parseFloat(N);if(!isNaN(N))N=N.toFixed(2);else N='0.00';return "$"+N;};
  const spicey = (M) => {
    return M * 10
  }

  const priceLevel = (P) => {
    if(P <= 8){
      return  <div className="price-level">
                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Money_Bag-512.png" />
              </div>
    } else if(P <= 12 && P > 8) {
      return  <div className="price-level">
                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Money_Bag-512.png" />
                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Money_Bag-512.png" />
              </div>
    } else{
      return  <div className="price-level">
                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Money_Bag-512.png" />
                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Money_Bag-512.png" />
                <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-5/512/Money_Bag-512.png" />
              </div>
  }}

  const menuItems = DATA.items.map(function(item){
  return(
      <div className="menu-item">
        <div className="thumbnail">
          <img src={ item.img } />
          <div className="caption">
            <h3> { item.name } </h3>

            <p> <strong>Price: {convertIntoCurrency(item.price)}</strong></p>
              {priceLevel(item.price)}

            <p> <strong> Spice Level </strong></p>
            <div className="progress">
              <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar"
              aria-valuenow= "0" aria-valuemin="0" aria-valuemax="100"
              style={{"width": spicey(item.spiceLevel)+"%" }}>
                {item.spiceLevel}
              </div>
            </div>

            <p><em> { item.category } </em></p>
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
