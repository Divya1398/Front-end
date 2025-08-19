import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-dark pt-4">
      {/* Social Media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>
        <div>
          <a href="#!" className="me-4 text-dark"><i className="fab fa-facebook-f" /></a>
          <a href="#!" className="me-4 text-dark"><i className="fab fa-twitter" /></a>
          <a href="#!" className="me-4 text-dark"><i className="fab fa-linkedin-in" /></a>
          <a href="#!" className="me-4 text-dark"><i className="fab fa-instagram" /></a>
          <a href="#!" className="me-4 text-dark"><i className="fab fa-github" /></a>
        </div>
      </section>

      {/* Company Info */}
      <section className="mt-4">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">TechCorp</h6>
              <p>
                TechCorp is your trusted partner for web and mobile solutions.
                We provide innovative, efficient, and reliable services to help your business thrive.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Products</h6>
              <p><a href="#!" className="text-dark">Web Development</a></p>
              <p><a href="#!" className="text-dark">Mobile Apps</a></p>
              <p><a href="#!" className="text-dark">UI/UX Design</a></p>
              <p><a href="#!" className="text-dark">Consulting</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Useful Links</h6>
              <p><a href="#!" className="text-dark">Pricing</a></p>
              <p><a href="#!" className="text-dark">Settings</a></p>
              <p><a href="#!" className="text-dark">Orders</a></p>
              <p><a href="#!" className="text-dark">Support</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
              <p><i className="fas fa-home me-2" /> 123 Main St, New York, NY</p>
              <p><i className="fas fa-envelope me-2" /> info@techcorp.com</p>
              <p><i className="fas fa-phone me-2" /> +1 234 567 890</p>
              <p><i className="fas fa-print me-2" /> +1 234 567 891</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3 mt-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 TechCorp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
