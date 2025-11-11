import axios from "axios";

const API_URL = process.env.API_COMERCIO_URL || "http://localhost:8081/comercio";

export const buscarComercioPorIdService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const criarComercioService = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);

    return {
      token: response.data?.token,
    };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const listarTodosComerciosService = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data; // Lista de Comercio
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const top5ComerciosPorSetorService = async (seguimento) => {
  try {
    const response = await axios.get(`${API_URL}/top5/setor/${seguimento}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const top5SetoresPrincipaisService = async () => {
  try {
    const response = await axios.get(`${API_URL}/top5/setores-principais`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const top5CadaSetorService = async () => {
  try {
    const response = await axios.get(`${API_URL}/top5/cada-setor`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const top5MultiplosSetoresService = async (setores) => {
  try {
    const queryString = setores.map(s => `setores[]=${encodeURIComponent(s)}`).join('&');
    const response = await axios.get(`${API_URL}/top5/setores?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};