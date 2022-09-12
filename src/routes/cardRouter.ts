import { Router } from "express"
import * as cardController from "../controllers/cardController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import cardSchema from "../schemas/cardSchema"

const cardRouter = Router()
const endpoint = "/card"

cardRouter.post(
	"/card",   
	ValidateSchema(cardSchema),
	cardController.createCard
)

cardRouter.get(
    "/cards/:userId",
    // verifyToken,
    cardController.getCardsByUserId
)

cardRouter.get(
    "/card/:userId/:id",
    verifyToken,
    cardController.getCardById
)

cardRouter.delete(
    "/card/:userId/:id",
    verifyToken,
    cardController.deleteCard
)

export default cardRouter