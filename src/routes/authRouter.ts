import { Router } from "express"
import * as authController from "../controllers/authController"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import authSchema from "../schemas/authSchema"

const authRouter = Router()

authRouter.post(
	"/signUp",	
	ValidateSchema(authSchema),
	authController.signUp
)

authRouter.post(
	"/signIn",	
	ValidateSchema(authSchema),
	authController.signIn
)

export default authRouter