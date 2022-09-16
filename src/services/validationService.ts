import * as userRepository from "../repositories/userRepository"
import * as noteRepository from "../repositories/noteRepository"
import * as credentialRepository from "../repositories/credentialRepository"
import * as cardRepository from "../repositories/cardRepository"
import { users } from "@prisma/client"
import { TypeUser} from "../utils/interfaces"
import bcrypt from "bcrypt"


export async function validateSignUp(
    email: string){

    const userData = await validateUserByEmail(email)  

    if(userData){
        throw { code: "Unauthorized", message: "E-mail already registered"}
    }
}

export async function validateSignIn(
    email: string,
    password: string){
  
    const userData = await validateUserByEmail(email)       

    if(!userData){
        throw { code: "Not Found", message: "Invalid e-mail "}
    }

    await validatePassword(password, userData.password)    
    return userData.id
}

export async function validateCreateCredential(
    userId: number,
    credentialName: string){

    await validateUserById(userId)
    await validateCredentialName(userId, credentialName)
}

export async function validateGetCredentials(
    userId: number){

    await validateUserById(userId)
}

export async function validateGetCredentialById(
    userId: number, 
    id: number){

    await validateUserById(userId)
    const credential : ICredential = await validateCredentialId(userId, id)

    return credential
}

export async function validateDeleteCredential(
    userId: number,
    id: number){

    await validateUserById(userId)
    await validateCredentialId(userId, id)
}

export async function validateCreateNote(
    userId: number,
    title: string){

    await validateUserById(userId)
    await validateNoteTitle(userId, title)
}

export async function validateGetNotes(
    userId: number){

    await validateUserById(userId)    
}

export async function validateGetNoteById(
    userId: number,
    id: number){

    await validateUserById(userId)
    const note = await validateNoteId(userId, id)

    return note
}

export async function validateDeleteNote(
    userId: number,
    id: number){

    await validateUserById(userId)
    await validateNoteId(userId, id)
}

export async function validateCreateCard(
    userId: Prisma.Decimal,
    cardName: string,){

    await validateUserById(userId)
    await validateCardName(userId, cardName)
}

export async function validateGetCards(
    userId: number){

    await validateUserById(userId) 
}

export async function validateGetCardById(
    userId: number,
    id: number){

    await validateUserById(userId)
    const card = await validateCardId(userId, id)

    return card
}

export async function validateDeleteCard(
    userId: number,
    id: number){

    await validateUserById(userId)
    await validateCardId(userId, id)
}

//-------------------------------------------------

export async function validateUserByEmail(
    email: string){

    const userData : users = await userRepository.searchUserByEmail(email) 
       
    return userData
}

export async function validateUserById(
    userId: number){

    const user = await userRepository.searchUserById(userId)   

    if(!user){
    throw {code: "Not Found", message: "User not found"}
    } 

    return user
}

export async function validatePassword(
    password: string,
    encryptedPassword: string){

    if(!bcrypt.compareSync(password, encryptedPassword)){
        throw { code: "Not Found", message: "Invalid password"}
    }
}

export async function validateCredentialName(
    userId: number,
    credentialName: string){

    const credential = await credentialRepository.searchCredentialByName(userId, credentialName)

    if(credential){
        throw { code: "Unauthorized", message: "Credential name already used" }
    }
}

export async function validateCredentialId(
    userId: number,
    id: number){

    const credential = await credentialRepository.getCredentialById(userId, id)

    if(!credential){
        throw { code: "Not Found", message: "Credential not found" }
    }

    return credential
}

export async function validateNoteTitle(
    userId: number,
    title: string){

    const note = await noteRepository.searchNoteByTitle(userId, title)

    if(note){
        throw { code: "Unauthorized", message: "Title already used" } 
    }
}

export async function validateNoteId(
    userId: number,
    id: number){

    const note = await noteRepository.getNoteById(userId, id)

    if(!note){
        throw { code: "Not Found", message: "Note not found" }
    }

    return note
}

export async function validateCardName(
    userId: number,
    cardName: string){

    const card = await cardRepository.searchCardByCardName(userId, cardName)

    if(card){
        throw { code: "Unauthorized", message: "Card name already used" }
    }
}

export async function validateCardId(
    userId: number,
    id: number){

    const card  = await cardRepository.getCardById(userId, id)

    if(!card){
        throw { code: "Not Found", message: "Card not found" }
    }

    return card
}

