import {prisma} from "../database/postgres"
import { IUser } from "../utils/interfaces"
import { users } from '@prisma/client'

export async function searchUserByEmail(
    emailInfo: string){
    // const userData = await connection.query(
    //     `
    //     SELECT * FROM users
    //     WHERE email = $1
    //     `, [emailInfo])    
        
    const userData = await prisma.users.findUnique({where: {email: emailInfo}})
   
    return userData
}

export async function searchUserById(
    id: number){

    // const userData = await connection.query<IUser>(
    //     `
    //     SELECT * FROM users
    //     WHERE id = $1
    //     `, [id])    
        
        
    const userData = await prisma.users.findUnique({where: {id}})
    return userData
}