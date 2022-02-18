import joi from 'joi';

const poolSchema = joi.object({
    title: joi.string().required(),
    expireAt: joi.optional()
})

export default poolSchema;