import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">FoodAlgorithms</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/search"}>Recipes</Nav.Link>
            <Nav.Link href={"/search"}>Cocktails</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href={"/login"}>Login</Nav.Link>
            <Nav.Link href={"/register"}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
