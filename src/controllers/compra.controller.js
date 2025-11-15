import {
  listarComprasService,
  buscarCompraPorIdService,
  buscarComprasPorClienteService,
  buscarComprasPorProdutoService,
  buscarComprasPorStatusService,
  confirmarCompraService,
  cancelarCompraService,
  removerCompraService,
  criarCompraService,
} from "../services/compra.service.js";


// 🔹 Função padrão de validação do token
const validarToken = (req, res) => {
  const token = req.headers.authorization;

  if (!token || token.trim() === "") {
    res.status(401).json({
      sucesso: false,
      mensagem: "Token não fornecido",
    });
    return null;
  }

  return token;
};


export const listarComprasController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  try {
    const compras = await listarComprasService(token);

    return res.status(200).json({
      sucesso: true,
      compras,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const buscarCompraPorIdController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID não fornecido",
    });
  }

  try {
    const compra = await buscarCompraPorIdService(id, token);

    return res.status(200).json({
      sucesso: true,
      compra,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const buscarComprasPorClienteController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { clienteId } = req.params;

  if (!clienteId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "clienteId não fornecido",
    });
  }

  try {
    const compras = await buscarComprasPorClienteService(clienteId, token);

    return res.status(200).json({
      sucesso: true,
      compras,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const buscarComprasPorProdutoController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { produtoId } = req.params;

  if (!produtoId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "produtoId não fornecido",
    });
  }

  try {
    const compras = await buscarComprasPorProdutoService(produtoId, token);

    return res.status(200).json({
      sucesso: true,
      compras,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const buscarComprasPorStatusController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { status } = req.params;

  if (!status) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "status não fornecido",
    });
  }

  try {
    const compras = await buscarComprasPorStatusService(status, token);

    return res.status(200).json({
      sucesso: true,
      compras,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const confirmarCompraController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID não fornecido",
    });
  }

  try {
    const compra = await confirmarCompraService(id, token);

    return res.status(200).json({
      sucesso: true,
      compra,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const cancelarCompraController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID não fornecido",
    });
  }

  try {
    const compra = await cancelarCompraService(id, token);

    return res.status(200).json({
      sucesso: true,
      compra,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const removerCompraController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID não fornecido",
    });
  }

  try {
    await removerCompraService(id, token);

    return res.status(204).send(); // NoContent
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};


export const criarCompraController = async (req, res) => {
  const token = validarToken(req, res);
  if (!token) return;

  const body = req.body;

  if (!body || !body.produtoId || !body.quantidade) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Dados inválidos. Envie produtoId e quantidade.",
    });
  }

  try {
    const compra = await criarCompraService(body, token);

    return res.status(201).json({
      sucesso: true,
      compra,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};
