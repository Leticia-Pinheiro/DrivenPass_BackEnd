import prisma from "../database/postgres"

export async function searchUserByEmail(
    email: string){    
    const userData = await prisma.users.findUnique({where: {email}})
    return userData
}

export async function searchUserById(
    id: number){        
    const userData = await prisma.users.findUnique({where: {id}})
    return userData
}