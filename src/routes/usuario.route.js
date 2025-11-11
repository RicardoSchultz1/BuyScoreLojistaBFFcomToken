import express from "express";
import { usuarioIDController,
            listarUsuariosController,
            criarUsuarioController
 } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/:id", usuarioIDController);

router.get("/all", listarUsuariosController);

router.post("/", criarUsuarioController);

export default router;
