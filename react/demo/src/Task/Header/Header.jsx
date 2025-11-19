import React from "react";
import "./hdr.css"
import logo from "./Logo.png"


function Header() {

    return (
         <>
        <div id="header">
        <div className="nav-color">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo}  alt="img" width="100px"/>
                    </div>
                    <ul className="navlist">
                        <li className="list"><a href="#" className="nav-a">HOME</a></li>
                        <li className="list"><a href="#" className="nav-a">ABOUT US</a></li>
                        <li className="list"><a href="#" className="nav-a">SERVICES</a></li>
                        <li className="list"><a href="#" className="nav-a">CONTACT US</a></li>
                         <li className="list"><a href="#" className="nav-a">Usereducer</a></li>
                    </ul>
                    <div className="icon">
                        <a href="" className="nav-b"><i className="fa-solid fa-bars"></i></a>
                    </div>
                </nav>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Header;
                