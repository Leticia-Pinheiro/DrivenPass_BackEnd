import prisma from "../database/postgres"
import { TypeNote } from "../utils/interfaces"

export async function createNote(
    noteData: TypeNote){
    await prisma.notes.create({data: noteData})
}

export async function getNotesByUserId(
    userId: number){
    const notes = await prisma.notes.findMany({where: {userId}})
    return notes
}

export async function getNoteById(
    userId: number,
    id: number){
    const note = await prisma.notes.findFirst({where: {userId, id}})
    return note
}

export async function deleteNote(    
    id: number){
    await prisma.notes.delete({where: {id}})
}

export async function searchNoteByTitle(
    userId: number,
    title: string){
    const note = await prisma.notes.findFirst({where: {userId, title}})
    return note
}