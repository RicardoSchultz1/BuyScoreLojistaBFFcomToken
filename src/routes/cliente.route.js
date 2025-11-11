import express from "express";
import {
  atualizarClienteController,
  cadastroController,
  checkFavoritoController,
  checkProdutoFavoritoController,
  removerClienteController,
  removerProdutoFavoritoController,
  adicionarFavoritoController,
  adicionarProdutoFavoritoController,
  listarFavoritosController,
  listarProdutosFavoritosController,
  removerFavoritoController,
  allclienteController,
  clienteIDController
} from "../controllers/cliente.controller.js";

const router = express.Router();

/*  COMÉRCIO FAVORITOS */
router.get("/comercio-favoritos", listarFavoritosController);
router.post("/comercio-favoritos/:comercioId", adicionarFavoritoController);
router.delete("/comercio-favoritos/:comercioId", removerFavoritoController);
router.get("/comercio-favoritos/:comercioId/check", checkFavoritoController);

/*  PRODUTO FAVORITOS */
router.get("/produto-favoritos", listarProdutosFavoritosController);
router.post("/produto-favoritos/:produtoId", adicionarProdutoFavoritoController);
router.delete("/produto-favoritos/:produtoId", removerProdutoFavoritoController);
router.get("/produto-favoritos/:produtoId/check", checkProdutoFavoritoController);

/*  CLIENTE */
router.post("/", cadastroController); // Criar cliente
router.put("/:id", atualizarClienteController); // Atualizar cliente
router.delete("/:id", removerClienteController); // Remover cliente
router.get("/", allclienteController); // Listar todos os clientes
router.get("/:id", clienteIDController); // Listar cliente por ID

export default router;
