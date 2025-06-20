import { Container, Image, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#19363f" }} variant="dark">
      <Container>
        <Navbar.Brand href="#">DriveGo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Serviços</Nav.Link>
            <Nav.Link href="#">Planos</Nav.Link>
            <Nav.Link href="#">Contato</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
