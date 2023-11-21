import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbarmain = () => {
  return (
    <Router>
      <div className="navbarmain">
        <Navbar expand="lg" className="navatas fixed-top bg">
          <Container>
            <Navbar.Brand href="/" className="bio fs-2 text-white">
              MyBio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link  href="/" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link  href="/About"   className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link  href="/Galeri"  className="nav-link">
                  Gallery
                </Nav.Link>
                <Nav.Link  href="/Contact"  className="nav-link">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Router>
  );
};

export default Navbarmain;
