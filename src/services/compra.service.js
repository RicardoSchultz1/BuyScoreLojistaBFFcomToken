import axios from "axios";

const API_URL = process.env.API_COMPRA_URL || "http://localhost:8081/compra";

export const listarComprasService = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const buscarCompraPorIdService = async (id, token) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const buscarComprasPorClienteService = async (clienteId, token) => {
  try {
    const response = await axios.get(`${API_URL}/cliente/${clienteId}`, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const buscarComprasPorProdutoService = async (produtoId, token) => {
  try {
    const response = await axios.get(`${API_URL}/produto/${produtoId}`, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const buscarComprasPorStatusService = async (status, token) => {
  try {
    const response = await axios.get(`${API_URL}/status/${status}`, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const confirmarCompraService = async (id, token) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/confirmar`, {}, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const cancelarCompraService = async (id, token) => {
  try {
    const response = await axios.put(`${API_URL}/${id}/cancelar`, {}, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const removerCompraService = async (id, token) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
      },
    });

    return { status: response.status };
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
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
          Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};
