import axios from "axios";

const API_URL = process.env.API_COMPRA_URL || "http://localhost:8081/compra";

export const listarComprasService = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data; // Lista de Compra
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const buscarCompraPorIdService = async (id) => {
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

export const buscarComprasPorClienteService = async (clienteId) => {
  try {
    const response = await axios.get(`${API_URL}/cliente/${clienteId}`);
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

export const buscarComprasPorProdutoService = async (produtoId) => {
  try {
    const response = await axios.get(`${API_URL}/produto/${produtoId}`);
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

export const buscarComprasPorStatusService = async (status) => {
  try {
    const response = await axios.get(`${API_URL}/status/${status}`);

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem ||
        "Erro na comunicação com a API",
    };
  }
};

export const confirmarCompraService = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/confirmar`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem ||
        "Erro na comunicação com a API",
    };
  }
};

export const cancelarCompraService = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/cancelar`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem ||
        "Erro na comunicação com a API",
    };
  }
};

export const removerCompraService = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);

    return {
      status: response.status,
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

export const criarCompraService = async (body, token) => {
  try {
    const response = await axios.post(
      `${API_URL}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API de compra:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com API",
    };
  }
};