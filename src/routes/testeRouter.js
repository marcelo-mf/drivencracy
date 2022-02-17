import { Router } from "express";
import { controllerTeste } from "../controllers/testeController.js";

const testeRouter = Router();

testeRouter.get('/teste', controllerTeste);

export default testeRouter;