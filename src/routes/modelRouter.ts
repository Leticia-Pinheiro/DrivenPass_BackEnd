import { Router } from "express"
import * as modelController from "../controllers/modelController"
import HeaderMiddleware from "../middlewares/headerMiddleware"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import modelSchema from "../schemas/modelSchema"

const modelRouter = Router()
const endpoint = "/model"
const header = "header_name"

modelRouter.post(
	"/create",
	HeaderMiddleware(header, endpoint),
	ValidateSchema(modelSchema, `${endpoint}/create`),
	modelController.modelFunction
)

export default modelRouter