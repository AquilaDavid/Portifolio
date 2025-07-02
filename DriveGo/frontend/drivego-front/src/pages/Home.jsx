import Carrossel from "../components/Carrossel/Carrossel.jsx";
import Cads_planos from "../components/Cards/Cards_planos/Cards_planos.jsx";
import Cards_carros from "../components/Cards/Cards_Carros/Cards_carros.jsx";
import Contato from "../components/Contatos/Contato.jsx";

function Home() {
  return (
    <>
      <Carrossel />
      <Cards_carros  />
      <Cads_planos />
      <Contato/>
    </>
  );
}

export default Home;
