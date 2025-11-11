import { usuarioIDService,
          listarUsuariosService,
          criarUsuarioService
 } from "../services/usuario.service.js";

export const usuarioIDController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ sucesso: false, mensagem: "ID não fornecido" });
  }

  try {
    const data = await usuarioIDService(id);
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const listarUsuariosController = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      sucesso: false,
      mensagem: "Token não fornecido",
    });
  }

  try {
    const usuarios = await listarUsuariosService(token);

    return res.status(200).json({
      sucesso: true,
      usuarios,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const criarUsuarioController = async (req, res) => {
  const body = req.body;

  if (!body?.nome || !body?.email || !body?.senha) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Campos obrigatórios: nome, email, senha.",
    });
  }

  try {
    const usuario = await criarUsuarioService(body);

    return res.status(200).json({
      sucesso: true,
      usuario,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};