import { Router } from "express";
import { postChoice, vote } from "../controllers/choiceController.js";
import { validadeSchemaChoiceMiddleware } from "../middlewares/validadeChoiceMiddleware.js";

const choiceRouter = Router();

choiceRouter.post('/choice', validadeSchemaChoiceMiddleware, postChoice);
choiceRouter.post('/choice/:id/vote', vote);

export default choiceRouter;