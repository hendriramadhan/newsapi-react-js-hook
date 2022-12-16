import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>NewsAPI</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Menu;
