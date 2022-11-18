import prisma from "../database/postgres"
import { TypeCredential } from "../utils/interfaces"

export async function createCredential(
    credentialData : TypeCredential){
    await prisma.credentials.create({data: credentialData})
}

export async function getCredentialsByUserId(
    userId: number){
    const credentials = await prisma.credentials.findMany({where: {userId}})    
    return credentials    
}

export async function getCredentialById(
    userId: number,
    id: number){
    const credential = await prisma.credentials.findFirst({where: {id, userId}})
    return credential
}

export async function deleteCredential(
    id: number){

    await prisma.credentials.delete({where: {id}})
}

export async function searchCredentialByName(
    userId: number,
    credentialName: string){
    const credential = await prisma.credentials.findFirst({where: {userId, credentialName}})
    return credential
}

