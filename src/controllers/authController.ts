import { Request, Response } from "express"
import * as authService from "../services/authService"
import { IUser } from "../utils/interfaces"

export async function signUp(req: Request, res: Response){
    const {email, password} : IUser = req.body 
    const result = await authService.signUp(email, password)

    res.send(result).status(200)
    
}

export async function signIn(req: Request, res: Response){
    const {email, password} : IUser = req.body 
    const token = await authService.signIn(email, password)

    res.send(token).status(200)
}

