import { Container, Row, Col, Card } from "react-bootstrap";


export default function Cads_planos (){
    return (
        <>
           <Container className="my-5" id="planos">
      <h2 className="text-center mb-4">Nossos Planos</h2>
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: "#5a7782", color: "#fff" }}>
            <Card.Body>
              <Card.Title>Aluguel Diário</Card.Title>
              <Card.Text>
                Ideal para necessidades rápidas e de curto prazo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#708d98", color: "#fff" }}>
            <Card.Body>
              <Card.Title>Plano Semanal</Card.Title>
              <Card.Text>
                Economize com as nossas tarifas semanais
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: "#45626c", color: "#fff" }}>
            <Card.Body>
              <Card.Title>Assinatura Mensal</Card.Title>
              <Card.Text>
                Use um carro por quanto tempo precisar
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        </>
    )   
}