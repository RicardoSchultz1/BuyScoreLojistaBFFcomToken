import axios from "axios";

const API_URL = process.env.API_ENDERECO_URL || "http://localhost:8081/endereco";

export const criarEnderecoService = async (endereco) => {
  const { cep, logradouro, complemento, bairro, cidade, numero, uf } = endereco;

  if (!cep || !logradouro || !complemento || !bairro || !cidade || numero === undefined || !uf) {
    throw {
      status: 400,
      mensagem: "Todos os campos do endereço são obrigatórios",
    };
  }

  try {
    const response = await axios.post(API_URL, endereco);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const enderecoIDService = async (id) => {
  if (!id) {
    throw {
      status: 400,
      mensagem: "ID do endereço não fornecido",
    };
  }

  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // retorna objeto Endereco
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const atualizarEnderecoService = async (endereco) => {
  if (!endereco || Object.keys(endereco).length === 0) {
    throw {
      status: 400,
      mensagem: "Objeto Endereço inválido ou vazio",
    };
  }

  try {
    await axios.put(`${API_URL}`, endereco);
    return { mensagem: "Endereço atualizado com sucesso" };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const removerEnderecoService = async (id) => {
  if (!id) {
    throw {
      status: 400,
      mensagem: "ID do endereço não fornecido",
    };
  }

  try {
    await axios.delete(`${API_URL}/${id}`);
    return { mensagem: "Endereço removido com sucesso" };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const buscarEnderecoPorCepService = async (cep) => {
  if (!cep) {
    throw {
      status: 400,
      mensagem: "CEP não fornecido",
    };
  }

  try {
    const response = await axios.post(`${API_URL}/cep`, cep);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const listarEnderecosService = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};