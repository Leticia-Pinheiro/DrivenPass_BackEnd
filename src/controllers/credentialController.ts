import { Request, Response } from "express"
import * as credentialService from "../services/credentialService"
import { ICredential } from "../utils/interfaces"

export async function createCredential(req: Request, res: Response){
    const {userId, credentialName, url, userName, password} : ICredential = req.body 
    await credentialService.createCredential(userId, credentialName, url, userName, password)

    res.send("Credential successfully registered").status(200)
}

export async function getCredentials(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const credentials = await credentialService.getCredentials(userId)

    res.send(credentials).status(200)
}

export async function getCredentialById(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const id : number = Number(req.params.id)
    const credential = await credentialService.getCredentialById(userId, id)

    res.send(credential).status(200)
}

export async function deleteCredential(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const id : number = Number(req.params.id)
    await credentialService.deleteCredential(userId, id)

    res.send("Credential successfully deleted").status(200)
}


