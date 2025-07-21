
import axios from "axios";

const API_URL = "http://localhost:8080/api/carros";

export const buscarCarros = async () => {
  try {
    const resposta = await axios.get("http://localhost:8080/api/carros");
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar carros:", erro);
    return [];
  }
};
