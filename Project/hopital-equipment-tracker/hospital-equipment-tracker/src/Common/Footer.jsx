import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer Start */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Hospital Info */}
          <div>
            <a href="/" className="inline-block mb-4">
              <h4 className="text-2xl font-bold flex items-center gap-2">
                <i className="fas fa-hospital-symbol text-blue-500" />
                Hospital Tracker
              </h4>
            </a>
            <p className="mb-4 text-gray-300">
              Efficiently manage hospital equipment, track inventory, and ensure smooth operations.
            </p>
            <div className="flex items-center mb-2 gap-2">
              <i className="fas fa-map-marker-alt text-blue-500" />
              <p>123 Medical Street, New York, USA</p>
            </div>
            <div className="flex items-center mb-2 gap-2">
              <i className="fas fa-envelope text-blue-500" />
              <p>contact@hospitaltracker.com</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa fa-phone-alt text-blue-500" />
              <p>(+1) 234 567 890</p>
            </div>
          </div>

          {/* Services / Equipment */}
          <div>
            <h4 className="text-xl font-bold mb-4">Services & Equipment</h4>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> ICU Equipment</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Diagnostic Tools</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Surgical Instruments</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Laboratory Equipment</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Emergency Kits</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Pricing</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Appointments</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Reports</a></li>
              <li><a href="#" className="flex items-center gap-2 text-gray-300 hover:text-blue-500"><i className="fas fa-angle-right" /> Contact Support</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
            <div className="space-y-4 mb-4">
              <div className="flex justify-between items-center">
                <span>Monday - Friday:</span>
                <span><i className="fas fa-clock text-blue-500 mr-2" /> 08:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday:</span>
                <span><i className="fas fa-clock text-blue-500 mr-2" /> 09:00 AM - 05:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday:</span>
                <span><i className="fas fa-clock text-blue-500 mr-2" /> Closed</span>
              </div>
            </div>
            <p className="mb-2">Payment Methods</p>
            <img src="img/payment.png" alt="Payment Methods" className="w-40" />
          </div>

        </div>
      </div>
      {/* Footer End */}

      {/* Copyright */}
      <div className="bg-gray-800 text-gray-400 py-4 text-center text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>
            &copy; 2025 Hospital Tracker. All rights reserved.
          </span>
          <span>
            Designed by{" "}
            <a href="https://htmlcodex.com" className="underline hover:text-white">HTML Codex</a> | Distributed by{" "}
            <a href="https://themewagon.com" className="underline hover:text-white">ThemeWagon</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
