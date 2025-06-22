import { Card as CardBS, Container, Row, Col } from "react-bootstrap";
import { Envelope, Phone, GeoAlt } from "react-bootstrap-icons";
import "./Contato.css";
import React, { useState } from "react";
import Card_Contato from "../../datasets/Cards_Contatos";

// Mapeamento dos ícones
const Icones = {
  Envelope: Envelope,
  Phone: Phone,
  GeoAlt: GeoAlt,
};

export default function Contato() {
  const [Cards_Contato] = useState(Card_Contato);

  return (
    <Container className="py-5" id="Contato">
      <h2 className="text-center mb-4">Contatos</h2>
      <Row className="justify-content-center g-4">
        {Cards_Contato.map((Card, i) => {
          const Icone = Icones[Card.icone];

          return (
            <Col md={4} key={i}>
              <CardBS className="rounded-circle-card text-center p-4">
                {Icone && <Icone size={40} className="mb-2" />}
                <CardBS.Title>{Card.titulo}</CardBS.Title>
                <CardBS.Text> {Card.valor || Card.email || Card.telefone || Card.endereco}</CardBS.Text>
              </CardBS>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
