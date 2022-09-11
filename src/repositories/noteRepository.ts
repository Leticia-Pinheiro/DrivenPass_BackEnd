import connection from "../database/postgres"

export async function createNote(
    userId: number,
    title: string,
    note: string){

    await connection.query(
        `
        INSERT INTO notes (userId, title, note)
        VALUES ($1, $2, $3)
        `, [userId, title, note])
}

export async function getNotesByUserId(
    userId: number){

    const notes = await connection.query(
        `
        SELECT * FROM notes
        WHERE userId = $1
        `, [userId])

    const example = [
        {
            id: 1,
            userId: 1,
            title: "lista de compras",
            note: "Arroz e feijão"
        },
        {
            id: 2,
            userId: 1,
            title: "lista de habitos",
            note: "Acordar e alongar"
        }
    ]
    
    return example
}

export async function getNoteById(
    userId: number,
    id: number){

    const note = await connection.query(
        `SELECT * FROM notes
        WHERE userId = $1
        AND id = $2
        `, [userId, id])

    const example = 
    {
        id: 1,
        userId: 1,
        title: "lista de compras",
        note: "Arroz e feijão"
    }

    return example
}

export async function deleteNote(
    userId: number,
    id: number){

    await connection.query(
        `DELETE FROM notes 
        WHERE userId = $1 
        AND id = $2
        `, [userId, id])
}

export async function searchNoteByTitle(
    userId: number,
    title: string){

    const note = await connection.query(
        `
        SELECT * FROM notes 
        WHERE userId = $1
        AND title = $2
        `, [userId, title])

    const example = {
        id: 1,
        userId: 1,
        title: "lista de compras",
        note: "Arroz e feijão"
    }

    return example
}