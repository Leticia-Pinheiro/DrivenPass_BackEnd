import { Request, Response } from "express"
import * as noteService from "../services/noteService"
import { TypeNote} from "../utils/interfaces"

export async function createNote(req: Request, res: Response){
    const noteData : TypeNote = req.body
    await noteService.createNote(noteData)

    res.send("Note created successfully").status(200)
}

export async function getNotesByUserId(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const notes = await noteService.getNotes(userId)

    res.send(notes).status(200)
}

export async function getNoteById(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const id : number = Number(req.params.id)

    const note = await noteService.getNoteById(userId, id)

    res.send(note).status(200)
}

export async function deleteNote(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const id : number = Number(req.params.id)

    await noteService.deleteNote(userId, id)
    
    res.send("Note deleted successfully").status(200)
}