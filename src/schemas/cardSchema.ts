import JoiBase from "joi"
import JoiDate from "@joi/date"

const joi = JoiBase.extend(JoiDate)

const numberRegex = /^\d{4} \d{4} \d{4} \d{4}$/

const cardSchema = joi.object({
    userId:joi.number().integer().required(),
	cardName: joi.string().required(),
	number: joi.string().pattern(numberRegex).required(),
    printedName: joi.string().required(),	
	securityCode: joi.string().length(3).required(),
    expirationDate: joi.date().format("MM/YY").required(),
	password: joi.string().required(),
	isVirtual: joi.boolean().strict().required(),
	type: joi.string().valid('credit', 'debt', 'both').required()    
});


export default cardSchema;