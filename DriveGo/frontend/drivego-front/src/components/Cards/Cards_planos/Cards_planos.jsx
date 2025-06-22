import { Container, Row, Col, Card } from "react-bootstrap";
import "./Cards_planos.css";


export default function Cads_planos() {
  return (
    <Container className="my-5" id="planos">
      <h2 className="text-center mb-4">Nossos Planos</h2>
      <Row>
        {/* Plano Diário */}
        <Col md={4}>
          <Card className="card-plano cor-1" style={{ backgroundColor: "#5a7782", color: "#fff" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/03/23/21/48/mustang-4962172_960_720.jpg"
              alt="Aluguel Diário"
            />
            <Card.Body>
              <Card.Title>Aluguel Diário</Card.Title>
              <Card.Text>
                Ideal para necessidades rápidas.
              </Card.Text>
              <h5>R$ 99,90 / dia</h5>
            </Card.Body>
          </Card>
        </Col>

        {/* Plano Semanal */}
        <Col md={4}>
          <Card className="card-plano cor-1" style={{ backgroundColor: "#708d98", color: "#fff" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2017/03/27/14/56/audi-2179220_1280.jpg"
              alt="Plano Semanal"
            />
            <Card.Body>
              <Card.Title>Plano Semanal</Card.Title>
              <Card.Text>Economize com as nossas tarifas semanais.</Card.Text>
              <h5>R$ 599,00 / semana</h5>
            </Card.Body>
          </Card>
        </Col>

        {/* Plano Mensal */}
        <Col md={4}>
          <Card className="card-plano cor-1" style={{ backgroundColor: "#45626c", color: "#fff" }}>
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2019/06/02/15/31/mercedes-4246654_960_720.jpg"
              alt="Assinatura Mensal"
            />

            <Card.Body>
              <Card.Title>Assinatura Mensal</Card.Title>
              <Card.Text>Use um carro por quanto tempo precisar.</Card.Text>
              <h5>R$ 1.999,00 / mês</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
