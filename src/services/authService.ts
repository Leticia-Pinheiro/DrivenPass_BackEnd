import * as validationService from "./validationService"
import * as authRepository from "../repositories/authRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"


export async function signUp(
    email: string, 
    password: string){

    await validationService.validateSignUp(email)
    const encryptedPassword : string = EncryptData(password)

    const result = await authRepository.signUp(email, encryptedPassword) //post

    return result
}

export async function signIn(
    email: string, 
    password: string){

    const userData = await validationService.validateSignIn(email, password)

    const token = generateToken(userData.id)

    return token
}