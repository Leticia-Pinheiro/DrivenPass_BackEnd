import prisma from "../database/postgres"
import { TypeUser } from "../utils/interfaces"


export async function createUser(
    userData: TypeUser){

    const {email, password} = userData
    await prisma.users.create({data: {email, password}})       
}



