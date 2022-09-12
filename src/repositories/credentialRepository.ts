import prisma from "../database/postgres"
import { ICredential } from "../utils/interfaces"

export async function createCredential(
    userId: number,
    credentialName: string,
    url: string,
    userName: string,
    password: string){

    const data = {userId, credentialName, url, userName, password}

    // await connection.query(
    //     `INSERT INTO credetials 
    //     (userId, credentialName, url, userName, password)
    //     VALUES ($1, $2, $3, $4, $5)
    //     `, [userId, credentialName, url, userName, password])

    await prisma.credentials.create({data: data})
}

export async function getCredentialsByUserId(
    userId: number){

    const credentials = await connection.query(
        `SELECT * FROM credentials
        WHERE userId = $1
        `, [userId])
        
    const example = [
        {
            id: 1,
            userId: 1,
            credentialName: "facebook",
            url: "http://facebook.com",
            userName: "Leticia Gomez",
            password: "leticia123"
        },
        {
            id: 2,
            userId: 1,
            credentialName: "instagram",
            url: "http://instagram.com",
            userName: "Leticia Gomez",
            password: "leticia123"
        }
    ]
    return credentials.rows
    
}

export async function getCredentialById(
    userId: number,
    id: number){

    const credential = await connection.query(
        `SELECT * FROM credentials
        WHERE userId = $1 
        AND id = $ 
        `, [userId, id])
        
    const example : ICredential = 
        {
            id: 1,
            userId: 1,
            credentialName: "facebook",
            url: "http://facebook.com",
            userName: "Leticia Gomez",
            password: "leticia123"
        }
        
    return credential.rows[0]

}

export async function deleteCredential(
    id: number){

    await connection.query(
        `DELETE FROM credentials
        WHERE id = $1
        `, [id])
}

export async function searchCredentialByName(
    userId: number,
    credentialName: string){

    const credential = await connection.query(
        `
        SELECT * FROM credentials 
        WHERE userId = $1
        AND name = $2
        `, [userId, credentialName])

    const example = 
        {
            id: 1,
            userId: 1,
            name: "facebook",
            url: "http://facebook.com",
            userName: "Leticia Gomez",
            password: "leticia123"
        }
        
    return credential.rows[0]
}

