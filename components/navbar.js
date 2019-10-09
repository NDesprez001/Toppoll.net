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
          alt='toppollLogo'
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/topics">Toppolls</Nav.Link>
            <Nav.Link href="https://disqus.com">Disqus</Nav.Link>
            <NavDropdown title="Social Media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/toppoll.net_offical/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/profile.php?id=100041945057018">
                FaceBook
              </NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/Toppoll1">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                toppoll.net@gmail.com
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://inspirobot.me">Random inspiration</Nav.Link>
          </Nav>
          <Nav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
