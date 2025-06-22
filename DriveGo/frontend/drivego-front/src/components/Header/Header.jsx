import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar id="Header" expand="lg" style={{ backgroundColor: "#19363f" }} variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/Home">
            <img
              className="foto-logo"
              src="/imagens/logo2 (1).png"
              alt="Logo da loja"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to ="/Home#planos">Planos</Nav.Link>
              <Nav.Link as={HashLink} to ="/Home#carros">Carros</Nav.Link>
              <Nav.Link as={HashLink} to = 'Home#Contato'>Contato</Nav.Link>
              <Nav.Link as={NavLink} to = '/Login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
