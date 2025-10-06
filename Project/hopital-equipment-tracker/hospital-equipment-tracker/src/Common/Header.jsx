import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // ✅ User state
  const [user, setUser] = useState({
    uid: localStorage.getItem("Uid") || null,
    uname: localStorage.getItem("Uname") || "",
  });

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("Uid");
    localStorage.removeItem("Uname");
    setUser({ uid: null, uname: "" });
    toast.success("Logged out successfully!");
    navigate("/ulogin");
  };

  // ✅ Navigation links
  const links = [
    { to: "/dash", label: "Dashboard" },
    { to: "/form", label: "Equipment Form" },
    { to: "/list", label: "Equipment List" },
  ];

  const navItemClasses =
    "text-blue-600 hover:text-blue-200 px-3 py-2 text-sm font-medium transition-colors duration-200";

  const navItemClassesMobile =
    "block text-blue-600 hover:text-blue-200 px-3 py-2 text-base font-medium transition-colors duration-200";

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-10 w-auto rounded"
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                alt="Hospital Logo"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:space-x-4 items-center">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      : navItemClasses
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* User Section */}
              {user.uid ? (
                <>
                  {/* Clickable Hello, Name */}
                  <NavLink
                    to="/register"
                    className={navItemClasses}
                  >
                    Hello, {user.uname}
                  </NavLink>

                  <button
                    onClick={logout}
                    className={navItemClasses}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/ulogin"
                  className={navItemClasses}
                >
                  Login
                </NavLink>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-800">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
                    : navItemClassesMobile
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Mobile User Section */}
            <div className="border-t border-gray-700 pt-2">
              {user.uid ? (
                <>
                  <NavLink
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className={navItemClassesMobile}
                  >
                    Hello, {user.uname}
                  </NavLink>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      logout();
                    }}
                    className={navItemClassesMobile}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/ulogin"
                  onClick={() => setIsOpen(false)}
                  className={navItemClassesMobile}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Carousel */}
      <div className="relative mt-16">
        <MDBCarousel showIndicators showControls fade interval={4000}>
          <MDBCarouselItem className="active">
            <img
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
              className="w-full h-[80vh] object-cover"
              alt="Slide 1"
            />
          </MDBCarouselItem>

          <MDBCarouselItem>
            <img
              src="https://images.pexels.com/photos/4483341/pexels-photo-4483341.jpeg"
              className="w-full h-[80vh] object-cover"
              alt="Slide 2"
            />
          </MDBCarouselItem>

          <MDBCarouselItem>
            <img
              src="https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg"
              className="w-full h-[80vh] object-cover"
              alt="Slide 3"
            />
          </MDBCarouselItem>
        </MDBCarousel>

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 px-4">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hospital Equipment Tracker
            </h1>
            <p className="text-lg sm:text-xl">
              Manage your hospital inventory efficiently. Track medical
              equipment, supplies, and generate real-time reports to ensure
              smooth hospital operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
