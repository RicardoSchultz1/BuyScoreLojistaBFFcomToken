import { atualizarClienteService,
  CadastroService,
  checkFavoritoService,
  checkProdutoFavoritoService,
  removerClienteService,
  removerProdutoFavoritoService,
  adicionarFavoritoService,
  adicionarProdutoFavoritoService,
  listarFavoritosService,
  listarProdutosFavoritosService,
  removerFavoritoService,
  allclienteService,
  clienteIDService  } from "../services/cliente.service.js";

export const atualizarClienteController = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID não fornecido",
    });
  }

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Body vazio ou inválido",
    });
  }

  try {
    await atualizarClienteService(id, body);

    return res.status(204).send();
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const cadastroController = async (req, res) => {
  const {
    perfilUsuario,
    nome,
    email,
    senha,
    fotoUsuario,
    cep,
    logradouro,
    complemento,
    bairro,
    cidade,
    numero,
    uf
  } = req.body;

  if (!perfilUsuario ||
    !nome ||
    !email ||
    !senha ||
    !fotoUsuario ||
    !cep ||
    !logradouro ||
    !complemento ||
    !bairro ||
    !cidade ||
    numero === undefined ||
    numero === null ||
    !uf
  ) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Todos os campos são obrigatórios"
    });
  }

  try {
    const data = await CadastroService(perfilUsuario, nome, email, senha, fotoUsuario, cep, logradouro, complemento, bairro, cidade, numero, uf);
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const checkFavoritoController = async (req, res) => {
  const { comercioId } = req.params;

  if (!comercioId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "comercioId não fornecido",
    });
  }

  try {
    const token = req.headers.authorization;

    const isFavorito = await checkFavoritoService(comercioId, token);

    return res.status(200).json({
      sucesso: true,
      favorito: isFavorito,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const checkProdutoFavoritoController = async (req, res) => {
  const { produtoId } = req.params;

  if (!produtoId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "produtoId não fornecido",
    });
  }

  try {
    const token = req.headers.authorization;

    const isFavorito = await checkProdutoFavoritoService(produtoId, token);

    return res.status(200).json({
      sucesso: true,
      favorito: isFavorito,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const removerClienteController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID não fornecido",
    });
  }

  try {
    await removerClienteService(id);

    return res.status(204).send(); // ✅ NoContent
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const removerProdutoFavoritoController = async (req, res) => {
  const { produtoId } = req.params;

  if (!produtoId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "produtoId não fornecido",
    });
  }

  try {
    const token = req.headers.authorization;

    await removerProdutoFavoritoService(produtoId, token);

    return res.status(204).send(); // ✅ NoContent
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const adicionarFavoritoController = async (req, res) => {
  const { comercioId } = req.params;

  if (!comercioId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "comercioId não fornecido",
    });
  }

  try {
    const token = req.headers.authorization;
    const data = await adicionarFavoritoService(comercioId, token);

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

export const adicionarProdutoFavoritoController = async (req, res) => {
  const { produtoId } = req.params;

  if (!produtoId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "produtoId não fornecido",
    });
  }

  try {
    const token = req.headers.authorization;

    const data = await adicionarProdutoFavoritoService(produtoId, token);

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

export const listarFavoritosController = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const data = await listarFavoritosService(token);

    return res.status(200).json({
      sucesso: true,
      favoritos: data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const listarProdutosFavoritosController = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const data = await listarProdutosFavoritosService(token);

    return res.status(200).json({
      sucesso: true,
      favoritos: data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const removerFavoritoController = async (req, res) => {
  const { comercioId } = req.params;

  if (!comercioId) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "comercioId não fornecido",
    });
  }

  try {
    const token = req.headers.authorization;

    await removerFavoritoService(comercioId, token);

    return res.status(204).send(); // ✅ NoContent
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const allclienteController = async (req, res) => {

  try {
    const data = await allclienteService();
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const clienteIDController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ sucesso: false, mensagem: "ID não fornecido" });
  }

  try {
    const data = await clienteIDService(id);
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};