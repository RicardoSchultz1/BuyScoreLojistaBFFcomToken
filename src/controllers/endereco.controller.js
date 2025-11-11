import {
    criarEnderecoService,
    enderecoIDService,
    atualizarEnderecoService,
    removerEnderecoService,
    buscarEnderecoPorCepService,
    listarEnderecosService,
} from "../services/endereco.service.js";

export const criarEnderecoController = async (req, res) => {
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Body do endereço inválido ou vazio",
        });
    }

    try {
        const enderecoCriado = await criarEnderecoService(body);

        return res.status(201).json({
            sucesso: true,
            endereco: enderecoCriado,
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            sucesso: false,
            mensagem: error.mensagem || "Erro interno no BFF",
        });
    }
};

export const enderecoIDController = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "ID do endereço não fornecido",
        });
    }

    try {
        const endereco = await enderecoIDService(id);

        return res.status(200).json({
            sucesso: true,
            endereco,
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            sucesso: false,
            mensagem: error.mensagem || "Erro interno no BFF",
        });
    }
};

export const atualizarEnderecoController = async (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Objeto Endereço inválido ou vazio",
    });
  }

  try {
    const data = await atualizarEnderecoService(body);

    return res.status(200).json({
      sucesso: true,
      ...data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const removerEnderecoController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID do endereço não fornecido",
    });
  }

  try {
    const data = await removerEnderecoService(id);

    return res.status(200).json({
      sucesso: true,
      ...data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const buscarEnderecoPorCepController = async (req, res) => {
  const { cep } = req.body;

  if (!cep) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "CEP não fornecido",
    });
  }

  try {
    const endereco = await buscarEnderecoPorCepService(cep);

    return res.status(200).json({
      sucesso: true,
      endereco,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const listarEnderecosController = async (req, res) => {
  try {
    const enderecos = await listarEnderecosService();

    return res.status(200).json({
      sucesso: true,
      enderecos,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};