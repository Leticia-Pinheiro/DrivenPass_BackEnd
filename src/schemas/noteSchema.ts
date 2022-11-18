import joi from "joi"

const noteSchema = joi.object({   
    userId: joi.number().integer().required(),
    title: joi.string().min(1).max(50).required(),
    note: joi.string().min(1).max(1000).required()	
});

export default noteSchema;