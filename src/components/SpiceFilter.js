import React from "react";

const SpiceFilter = (props) => {
  return(
    <div className="spice-filter">
      <h4> Enter Spice Level </h4>
      <input type="number" onChange={props.onFilterChanged} />
      <p> (0-10)</p>
    </div>
  )
}


export default SpiceFilter
