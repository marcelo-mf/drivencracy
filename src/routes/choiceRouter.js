import { Router } from "express";
import { postChoice } from "../controllers/choiceController.js";
import { validadeSchemaChoiceMiddleware } from "../middlewares/validadeChoiceMiddleware.js";

const choiceRouter = Router();

choiceRouter.post('/choice', validadeSchemaChoiceMiddleware, postChoice);

export default choiceRouter;