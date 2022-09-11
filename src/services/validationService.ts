import * as authRepository from "../repositories/authRepository"
import * as userRepository from "../repositories/userRepository"
import * as credentialRepository from "../repositories/credentialRepository"
import { IUser, ICredential} from "../utils/interfaces"
import bcrypt from "bcrypt"

export async function validateSignUp(
    email: string){

    const result = await validateUserByEmail(email)  

    if(result){
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
    
    return userData
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

//-------------------------------------------------

export async function validateUserByEmail(
    email: string){

    const user = await userRepository.searchUserByEmail(email)      
    return user
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
