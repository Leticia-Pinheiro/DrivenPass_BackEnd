import * as validationService from "./validationService"
import * as noteRepository from "../repositories/noteRepository"
import { TypeNote } from "../utils/interfaces"

export async function createNote(
    noteData: TypeNote){

    const { 
        userId, 
        title, 
    } = noteData

    await validationService.validateCreateNote(userId, title)
    await noteRepository.createNote(noteData)
}

export async function getNotes(
    userId: number){

    await validationService.validateGetNotes(userId)
    const notes = await noteRepository.getNotesByUserId(userId)

    return notes
}

export async function getNoteById(
    userId: number,
    id: number){

    const note = await validationService.validateGetNoteById(userId, id) 

    return note 
}

export async function deleteNote(
    userId: number,
    id: number){

    await validationService.validateDeleteNote(userId, id)
    await noteRepository.deleteNote(id)
}