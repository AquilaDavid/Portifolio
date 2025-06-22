import { Container, Row, Col, Card } from "react-bootstrap";
import '../Cards_Carros/Cards_carros.css'

export default function Cads_destaque() {
  return (
    <Container className="my-5 Cards_Body" id="carros">
      <h2 className="text-center mb-4">Carros em Destaque</h2>
      <Row>
        {/* Mercedes-Benz Classe A */}
        <Col md={4}>
          <Card className="card-destaque" style={{ backgroundColor: "#5a7782", color: "#fff" }}>
            <Card.Img
              variant="top"
              src="https://andrebona.com.br/wp-content/uploads/2018/07/mercedes-benz-classe-a-2019.png"
              alt="Mercedes-Benz Classe A"
            />
            <Card.Body>
              <Card.Title>Mercedes-Benz Classe A</Card.Title>
              <Card.Text>
                Compacto e elegante, perfeito para quem quer rodar com estilo pela cidade.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Ford Mustang */}
        <Col md={4}>
          <Card className="card-destaque" style={{ backgroundColor: "#708d98", color: "#fff" }}>
            <Card.Img
              variant="top"
              src="https://cdn.autopapo.com.br/box/uploads/2024/04/12105652/image001-732x488.png"
              alt="Ford Mustang"
            />
            <Card.Body>
              <Card.Title>Ford Mustang</Card.Title>
              <Card.Text>
                Design esportivo e motor potente — uma experiência de dirigir inesquecível.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Volkswagen Golf GTI */}
        <Col md={4}>
          <Card className="card-destaque" style={{ backgroundColor: "#45626c", color: "#fff" }}>
            <Card.Img
              variant="top"
              src="https://cdn.autopapo.com.br/box/uploads/2024/10/23100933/golfgti1200x800-732x488.jpg"
              alt="Volkswagen Golf GTI"
            />
            <Card.Body>
              <Card.Title>Volkswagen Golf GTI</Card.Title>
              <Card.Text>
                Ideal para quem busca desempenho com conforto e tecnologia alemã.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
