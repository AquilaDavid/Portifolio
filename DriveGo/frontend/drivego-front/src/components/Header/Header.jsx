import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <>
      <Navbar className="Navbar">
        <Container>
          <Navbar.Brand as={NavLink} to="/Home">
            <Image className="foto-logo" src="public\imagens\logo2 (1).png" />
          </Navbar.Brand>

          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={NavLink} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Catalagos">
              Catálogos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Reservar">
              Reservar Carro
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Login">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
