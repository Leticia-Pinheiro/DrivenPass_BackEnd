import * as validationService from "./validationService"
import * as authRepository from "../repositories/authRepository"
import { generateToken } from "../utils/generateToken"
import { EncryptData }  from "../utils/bcrypt"
import { TypeUser } from "../utils/interfaces"

export async function signUp(
    userData: TypeUser){

    const {email, password} = userData
    await validationService.validateSignUp(email)
    const encryptedPassword : string = EncryptData(password)
    await authRepository.createUser({email, password: encryptedPassword}) 
}

export async function signIn(
    userData: TypeUser){

    const{email, password} = userData
    const id: number = await validationService.validateSignIn(email, password)
    const token = generateToken(id)
    return token
}