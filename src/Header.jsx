import React from "react";
import logo from "./Images/logo.jpg"

const Header = () =>
{
    return(
        <>
        <div className="header">

          <div className="div1"> <img  src={logo} alt="logo.jpg" width='80' height='50'/></div> 
         
          <div className="div2"><h1 >Piyush Keep</h1></div>  
       
        </div>

        </>
    )
}

export default Header;