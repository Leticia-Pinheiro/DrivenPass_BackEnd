import { Request, Response } from "express"
import * as authService from "../services/authService"
import { TypeUser } from "../utils/interfaces"

export async function signUp(req: Request, res: Response){

    const userData : TypeUser = req.body 
    await authService.signUp(userData)
    res.send("Registration successfully complete").status(200)    
}

export async function signIn(req: Request, res: Response){

    const userData : TypeUser = req.body 
    const token = await authService.signIn(userData)
    res.send(token).status(200)
}

