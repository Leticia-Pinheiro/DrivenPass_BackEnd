import prisma from "../database/postgres"
import { TypeUser } from "../utils/interfaces"


export async function createUser(
    userData: TypeUser){    
    await prisma.users.create({data: userData})       
}



