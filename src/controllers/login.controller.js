import { loginService } from "../services/login.service.js";

export const loginController = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ sucesso: false, mensagem: "Email e senha são obrigatórios" });
  }

  try {
    const data = await loginService(email, senha);
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};
