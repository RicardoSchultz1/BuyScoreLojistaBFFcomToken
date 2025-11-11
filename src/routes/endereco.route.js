import express from "express";
import {
    criarEnderecoController,
    enderecoIDController,
    atualizarEnderecoController,
    removerEnderecoController,
    buscarEnderecoPorCepController,
    listarEnderecosController,
} from "../controllers/endereco.controller.js";

const router = express.Router();

router.post("/", criarEnderecoController);

router.get("/:id", enderecoIDController);

router.put("/", atualizarEnderecoController);

router.delete("/:id", removerEnderecoController);

router.post("/cep", buscarEnderecoPorCepController);

router.get("/all", listarEnderecosController);

export default router;
