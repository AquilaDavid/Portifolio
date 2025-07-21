import { Container, Row, Col, Card } from "react-bootstrap";
import '../Cards_Carros/Cards_carros.css'
import React, { useState } from "react";
import CadsHomeCarro from "../../../datasets/CadsHomeCarro";


export default function Cads_destaque() {

  let [Cads_Home_Carro, setCadsHomeCarro] =useState(CadsHomeCarro)

  return (
    <Container className="my-5 Cards_Body" id="carros">
      <h2 className="text-center mb-4">Carros em Destaque</h2>
      <Row>
        {Cads_Home_Carro.map((Carros, i)=> {
          return (
          <Col md={4} key={i}>
          <Card className="card-destaque" style={{ backgroundColor: "#5a7782", color: "#fff" }}>
            <Card.Img
              variant= 'top'
              src={Carros.src}
              alt={Carros.alt}
            />
            <Card.Body>
              <Card.Title>{Carros.titulo}</Card.Title>
              <Card.Text>
                {Carros.descrição}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          )
        })}
      </Row>
    </Container>
  );
}