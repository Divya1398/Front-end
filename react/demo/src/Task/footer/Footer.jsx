 import React from "react";
import "./footer.css"


function Footer() {

    return (
         <>
 
 <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="footer">
                <h4 className="footer-h4">Title Here</h4>
                <p className="footer-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id
                  maximus ex. Etiam nec dignissim elit, at dignissim enim.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="footer">
                <div className="row">
                  <div className="col">
                    <h4 className="footer-h4">About</h4>
                    <ul className="footer-ul">
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          History
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Our Team
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Brand Guidelines
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Terms & Condition
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h4 className="footer-h4">Services</h4>
                    <ul className="footer-ul">
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          How to Order
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Our Product
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Order Status
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Promo
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          Payment Method
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h4 className="footer-h4">Other</h4>
                    <ul className="footer-ul">
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          <i className="fa-brands fa-facebook"></i>&nbsp;facebook
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          <i className="fa-brands fa-instagram"></i>&nbsp;instagram
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          <i className="fa-brands fa-whatsapp"></i>&nbsp;whatsapp
                        </a>
                      </li>
                      <li className="footer-li">
                        <a href="#" className="footer-a">
                          <i className="fa-brands fa-twitter"></i>&nbsp;Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
    )
}
export default Footer;
      