import * as validationService from "./validationService"
import * as credentialRepository from "../repositories/credentialRepository"
import { EncryptData, DecryptData } from "../utils/cryptr"
import { ICredential } from "../utils/interfaces"

export async function createCredential(
    userId: number,
    credentialName: string,
    url: string,
    userName: string,
    password: string){

    await validationService.validateCreateCredential(userId, credentialName)
    const encryptedPassword = EncryptData(password)
    await credentialRepository.createCredential(userId, credentialName, url, userName, encryptedPassword)
}

export async function getCredentials(
    userId: number){

    await validationService.validateGetCredentials(userId)
    const credentials = await credentialRepository.getCredentialsByUserId(userId)
    const newCredentials = credentials.map(c => {
        const decryptPassword = DecryptData(c.password)

        const newCredential = 
        {    
            id: c.id,    
            userId: c.userId,
            credentialName: c.credentialName,
            url: c.url,
            userName: c.userName,
            decryptPassword
        }
        
        return newCredential
    })

    return newCredentials
}

export async function getCredentialById(
    userIdInformed: number,
    idInformed: number){

    const {id, userId, credentialName, url, userName, password} : ICredential = await validationService.validateGetCredentialById(userIdInformed, idInformed)
    
    const decryptPassword = DecryptData(password)

    const credential = 
    {    
        id,    
        userId,
        credentialName,
        url,
        userName,
        decryptPassword
    }

    return credential
    
}

export async function deleteCredential(
    userId: number,
    id: number){

    await validationService.validateDeleteCredential(userId, id)
    await credentialRepository.deleteCredential(id)    
}


