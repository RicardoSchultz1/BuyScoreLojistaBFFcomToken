import axios from "axios";

const API_URL = "http://localhost:8081/usuario";

export const usuarioIDService = async (id) => {
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

export const listarUsuariosService = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API de usuário:", error.message);

    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com API",
    };
  }
};

export const criarUsuarioService = async (body) => {
  try {
    const response = await axios.post(
      `${API_URL}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API de usuário:", error.message);

    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com API",
    };
  }
};