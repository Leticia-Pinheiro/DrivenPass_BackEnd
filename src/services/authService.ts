import * as validationService from "./validationService"
import * as authRepository from "../repositories/authRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"
import { IUser } from "../utils/interfaces"

export async function signUp(
    email: string, 
    password: string){

    await validationService.validateSignUp(email)
    const encryptedPassword : string = EncryptData(password)

    await authRepository.createUser(email, encryptedPassword) 
}

export async function signIn(
    email: string, 
    password: string){

    const {id } : { id: number} = await validationService.validateSignIn(email, password)

    const token = generateToken(id)

    return token
}