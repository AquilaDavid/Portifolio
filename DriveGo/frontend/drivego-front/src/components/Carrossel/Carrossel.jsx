import Carousel from "react-bootstrap/Carousel";
import './Carrossel.css'


function Carrossel() {
  return (
     <Carousel>
      <Carousel.Item>
        <img
          src="https://www.boatshopping.com.br/wp-content/uploads/2019/08/carros-de-luxo-david-beckham-boat-shopping.jpg"
          alt="slide 1"
          className="d-block w-100"
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h2 className="frase-banner">ALUGUE SEU CARRO COM CONFORTO E SEGURANÇA</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
