import React from "react";

const MenuHero = () => {
  const hero = () => {
    return (
      <div>
        <div className="hero-text">
          <h1 className="hero-title"> Tex-Mex </h1>
          <button> Contact Us </button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="hero-image">
        { hero }
      </div>
    </div>
  )
}


export default MenuHero;
