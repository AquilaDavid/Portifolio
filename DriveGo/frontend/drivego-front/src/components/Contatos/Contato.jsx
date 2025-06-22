// src/components/ContatoCards.jsx
import { Card, Container, Row, Col } from "react-bootstrap";
import { Envelope, Phone, GeoAlt } from "react-bootstrap-icons";
import "./Contato.css";

export default function Contato() {
  return (
    <>
      <Container className="py-5" id="Contato">
       <h2 className="text-center mb-4">Contatos</h2>
        <Row className="justify-content-center g-4">
          <Col md={4}>
            <Card className="rounded-circle-card text-center p-4">
              <Envelope size={40} className="mb-2" />
              <Card.Title>Email</Card.Title>
              <Card.Text>contato@drivego.com</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="rounded-circle-card text-center p-4">
              <Phone size={40} className="mb-2" />
              <Card.Title>Telefone</Card.Title>
              <Card.Text>(83) 99999-0000</Card.Text>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="rounded-circle-card text-center p-4">
              <GeoAlt size={40} className="mb-2" />
              <Card.Title>Endereço</Card.Title>
              <Card.Text>Guarabira - PB</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
