import React from "react";
import DATA from "./DATA";

const AboutHero = () => {
  const hero = DATA.company.map(function(item){
    return (
      <div>
        <div className="hero-text">
          <h1 className="hero-title"> { item.title } </h1>
          <button> Contact Us </button>
        </div>
      </div>
    )
  })
  return (
    <div>
      <div className="hero-image-about">
        { hero }
      </div>
    </div>
  )
}


export default AboutHero;
