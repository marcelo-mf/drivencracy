import  choiceSchema from "../schemas/validateChoiceSchema.js";

export function validadeSchemaChoiceMiddleware(req, res, next) {

    const validation = choiceSchema.validate(req.body);

    if(validation.error) {
        return res.sendStatus(422);
    }

    next();
}