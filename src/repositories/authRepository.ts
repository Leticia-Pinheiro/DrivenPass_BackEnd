import prisma from "../database/postgres"


export async function createUser(
    email: string, 
    password: string){
    await prisma.users.create({data: {email, password}})       
}



