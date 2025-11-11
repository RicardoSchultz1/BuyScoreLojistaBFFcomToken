import express from "express";
import { criarpontosController,
            resgatarPontosPorCodigoController
 } from "../controllers/ponto.controller.js";

const router = express.Router();

router.post("/", criarpontosController);

router.get("/codigo/:codigo", resgatarPontosPorCodigoController);

export default router;
