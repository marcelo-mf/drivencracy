import { Router } from "express";
import { getChoices, getPools, getResult, pool } from "../controllers/poolController.js";
import { validadeSchemaPoolMiddleware } from "../middlewares/validatePoolMiddleware.js";

const poolRouter = Router();

poolRouter.post('/pool', validadeSchemaPoolMiddleware, pool);
poolRouter.get('/pool', getPools);
poolRouter.get('/pool/:id/choice', getChoices);
poolRouter.get('/pool/:id/result', getResult);

export default poolRouter;