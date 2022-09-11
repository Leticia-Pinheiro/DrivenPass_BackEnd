import * as validationService from "./validationService"
import * as noteRepository from "../repositories/noteRepository"

export async function createNote(
    userId: number,
    title: string,
    note: string){

    await validationService.validateCreateNote(userId, title)
    await noteRepository.createNote(userId, title, note)
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
    await noteRepository.deleteNote(userId, id)
}