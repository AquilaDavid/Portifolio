import { Container, Image, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#19363f" }} variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/Home">
            <img
              className="foto-logo"
              src="public\imagens\logo2 (1).png"
              alt="Logo da loja"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to = '/Servicos'>Serviços</Nav.Link>
              <Nav.Link as={NavLink} to = '/Planos'>Planos</Nav.Link>
              <Nav.Link as={NavLink} to = '/Contatos'>Contato</Nav.Link>
              <Nav.Link as={NavLink} to = '/Login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
