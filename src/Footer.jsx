import React from "react";
const Footer = () =>
{  
   const year = new Date().getFullYear();
    return(
        <>
        <div className="footer" > <p>copyright &copy; {year}</p></div>
    
        </>
    );
}

export default Footer;