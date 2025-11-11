import express from "express";
import {
    listarComprasController,
    buscarCompraPorIdController,
    buscarComprasPorClienteController,
    buscarComprasPorProdutoController,
    buscarComprasPorStatusController,
    confirmarCompraController,
    cancelarCompraController,
    removerCompraController,
    criarCompraController
} from "../controllers/compra.controller.js";

const router = express.Router();

router.get("/all", listarComprasController);

router.get("/:id", buscarCompraPorIdController);

router.get("/cliente/:clienteId", buscarComprasPorClienteController);

router.get("/produto/:produtoId", buscarComprasPorProdutoController);

router.get("/status/:status", buscarComprasPorStatusController);

router.post("/confirmar", confirmarCompraController);

router.post("/:id/cancelar", cancelarCompraController);

router.delete("/:id", removerCompraController);

router.post("/", criarCompraController);

export default router;
