import { Router } from "express";
import { getChoices, getPools, pool } from "../controllers/poolController.js";
import { validadeSchemaPoolMiddleware } from "../middlewares/validatePoolMiddleware.js";

const poolRouter = Router();

poolRouter.post('/pool', validadeSchemaPoolMiddleware, pool);
poolRouter.get('/pool', getPools);
poolRouter.get('/pool/:id/choice', getChoices);


export default poolRouter;