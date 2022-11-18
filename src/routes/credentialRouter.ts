import { Router } from "express"
import * as credentialController from "../controllers/credentialController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import credentialSchema from "../schemas/credentialSchema"

const credentialRouter = Router()

credentialRouter.post(
	"/credential",	
    verifyToken,
	ValidateSchema(credentialSchema),
	credentialController.createCredential
)

credentialRouter.get(
    "/credentials/:userId",
    verifyToken,
    credentialController.getCredentials
)

credentialRouter.get(
    "/credential/:userId/:id",
    verifyToken,
    credentialController.getCredentialById
)

credentialRouter.delete(
    "/credential/:userId/:id",
    verifyToken,
    credentialController.deleteCredential
)

export default credentialRouter