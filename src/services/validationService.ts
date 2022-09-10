import * as authRepository from "../repositories/authRepository";
import { IUser } from "../utils/interfaces"
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

//-------------------------------------------------

export async function validateUserByEmail(
    email: string){
    const result = await authRepository.searchUserByEmail(email)    
    return result
}

export async function validatePassword(
    password: string,
    encryptedPassword: string){

    if(!bcrypt.compareSync(password, encryptedPassword)){
        throw { code: "Not Found", message: "Invalid password"}
    }
}
