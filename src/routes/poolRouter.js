import { Router } from "express";
import { getPools, pool } from "../controllers/poolController.js";
import { validadeSchemaPoolMiddleware } from "../middlewares/validatePoolMiddleware.js";

const poolRouter = Router();

poolRouter.post('/pool', validadeSchemaPoolMiddleware, pool);
poolRouter.get('/pool', getPools)

export default poolRouter;