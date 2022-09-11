import joi, { number, string } from "joi"

const noteSchema = joi.object({   
    userId: number().integer().required(),
    title: string().min(1).max(50).required(),
    note: string().min(1).max(1000).required()	
});

export default noteSchema;