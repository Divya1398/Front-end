import React from "react";
import "./Style.css"
function Css(){
    return(
       <div>
         <h1 style={{background:"red",color:"white"}}>CSS</h1>
        <h1 className="ext">external css</h1>
        <div className="main"></div>
       </div>
    )
}
export default Css;