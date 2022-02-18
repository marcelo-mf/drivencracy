import poolSchema from "../schemas/validatePoolSchema.js";

export function validadeSchemaPoolMiddleware(req, res, next) {

    const validation = poolSchema.validate(req.body);

    if(validation.error) {
        return res.sendStatus(422);
    }

    next();
}