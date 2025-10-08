import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <NavLink to="/" className="nav-link px-3 text-primary">
                Home
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink to="/table" className="nav-link px-3 text-primary">
                Table
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink to="/crud" className="nav-link px-3 text-primary">
                Crud
              </NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <NavLink to="/add-user" className="nav-link px-3 text-primary">
                Add User
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Nav;
