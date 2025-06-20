import Carrossel from '../components/Carrossel/Carrossel.jsx'
import Cads_planos from '../components/Cards/Cards_planos/Cards_planos.jsx';
import Cards_carros from "../components/Cards/Cards_Carros/Cards_carros.jsx";
import carros from '../datasets/Carros.js';


function Home() {
  return (
    <>
      <Carrossel/>
      <br />
      <div>voce chefou ao home</div>
      <br />
      <Cads_planos/>
      <br />
      <Cards_carros lista={carros} />
    </>

  );
}

export default Home;
