import { Container } from "react-bootstrap";
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" >
      <Container>
        <p>&copy; {new Date().getFullYear()} DriveGo - Todos os direitos reservados</p>
      </Container>
    </footer>
  );
}