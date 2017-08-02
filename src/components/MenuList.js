import React from "react";
import MenuItem from "./MenuItem";



const MenuList = (props) => {
  return(

    <div className="menu-container">
    {
        props.items.map((item, index) => <MenuItem item={item} key={index} />)
    }
    </div>
  )
}

export default MenuList
