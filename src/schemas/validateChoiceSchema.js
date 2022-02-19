import joi from 'joi';

const choiceSchema = joi.object({
    title: joi.string().required(),
    poolId: joi.required()
})

export default choiceSchema;