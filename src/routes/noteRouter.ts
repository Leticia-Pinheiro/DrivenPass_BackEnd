import { Router } from "express"
import * as noteController from "../controllers/noteController"
import verifyToken from "../middlewares/verifyToken"
import ValidateSchema from "../middlewares/validateSchemaMiddleware"
import noteSchema from "../schemas/noteSchema"

const noteRouter = Router()
const endpoint = "/notes"

noteRouter.post(
	"/note",	
    verifyToken,
	ValidateSchema(noteSchema),
	noteController.createNote
)

noteRouter.get(
    "/notes/:userId",
    verifyToken,
    noteController.getNotesByUserId
)

noteRouter.get(
    "/note/:userId/:id",
    verifyToken,
    noteController.getNoteById
)

noteRouter.delete(
    "/note/:userId/:id",
    verifyToken,
    noteController.deleteNote
)

export default noteRouter