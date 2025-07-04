import { Container, Row, Col, Card } from "react-bootstrap";
import "./Cards_planos.css";
import React,{ useState } from "react";
import Cards_Planos from "../../../datasets/Cards_Planos";



export default function Cads_planos() {

  let [Card_Plano, setCad_Plano] = useState(Cards_Planos)

  return (
    <Container className="my-5" id="planos">
      <h2 className="text-center mb-4">Nossos Planos</h2>
      <Row>
       
        {Card_Plano.map((Cards, i) => {
          return(
            <Col md={4} key={i}>
          <Card className="card-plano cor-1" style={{ backgroundColor: "#5a7782", color: "#fff" }}>
            <Card.Img
              variant="top"
              src= {Cards.src}
              alt= {Cards.alt}
            />
            <Card.Body>
              <Card.Title>{Cards.titulo}</Card.Title>
              <Card.Text>
                {Cards.descrição}
              </Card.Text>
              <h5>{Cards.preco}</h5>
            </Card.Body>
          </Card>
        </Col>
          )
        })}
        
      </Row>
    </Container>
  );
}
