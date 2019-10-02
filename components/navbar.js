import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <img
          className="TPlogo"
          src="https://files.slack.com/files-pri/T0BFXMWMV-FNJUVAP7D/tplogo.png"
        />
        <div className="logo">
          <Navbar.Brand href="#home">
            <h1>T</h1>
            <h3>oppoll.net</h3>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Go to Toppolls</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Social Media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FaceBook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                NoshDesprez@gmail.com
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
