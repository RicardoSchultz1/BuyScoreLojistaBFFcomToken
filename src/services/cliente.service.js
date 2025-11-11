import axios from "axios";

const API_URL = process.env.API_CLIENTE_URL || "http://localhost:8081/cliente";

export const atualizarClienteService = async (id, cliente) => {
  try {
    await axios.put(`${API_URL}/${id}`, cliente);
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const CadastroService = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);

    // Retorna apenas o que o front precisa
    return {
      token: response.data.token,
    };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const checkFavoritoService = async (comercioId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/comercio-favoritos/${comercioId}/check`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

export const checkProdutoFavoritoService = async (produtoId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/produto-favoritos/${produtoId}/check`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // espera que a API retorne true ou false
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

export const removerClienteService = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const removerProdutoFavoritoService = async (produtoId, token) => {
  try {
    await axios.delete(`${API_URL}/produto-favoritos/${produtoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const adicionarFavoritoService = async (comercioId, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/comercio-favoritos/${comercioId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      mensagem: response.data?.mensagem || "Favorito adicionado com sucesso",
    };
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

export const adicionarProdutoFavoritoService = async (produtoId, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/produto-favoritos/${produtoId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      mensagem: response.data?.mensagem || "Produto adicionado aos favoritos",
    };
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

export const listarFavoritosService = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/comercio-favoritos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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

export const listarProdutosFavoritosService = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/produto-favoritos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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

export const removerFavoritoService = async (comercioId, token) => {
  try {
    await axios.delete(`${API_URL}/comercio-favoritos/${comercioId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const allclienteService = async () => {
  try {
    const response = await axios.get(API_URL + "/all");

    return {
      clientes: response.data,
    };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const clienteIDService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);

    return {
      usuario: response.data,
    };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};