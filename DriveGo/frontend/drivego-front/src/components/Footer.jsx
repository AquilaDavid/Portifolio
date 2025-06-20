import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#19363f", color: "#fff", padding: "20px 0", textAlign: "center" }}>
      <Container>
        <p>&copy; {new Date().getFullYear()} DriveGo - Todos os direitos reservados</p>
      </Container>
    </footer>
  );
}