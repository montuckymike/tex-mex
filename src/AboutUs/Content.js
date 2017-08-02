import React from "react";
import DATA from "./DATA.js";

const Content = () => {
  const companyContent = DATA.address.map(function(address){
    return(
      <div className="content-items">
        <h3>{address.street}</h3>
        <h3>{address.suite}</h3>
        <h4>{address.city}, {address.state} {address.zip}</h4>
      </div>
    )
})
return(
  <div className="content-container">
    {companyContent}
  </div>
)
}

export default Content
