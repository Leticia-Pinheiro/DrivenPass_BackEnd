import { Request, Response } from "express"
import * as cardService from "../services/cardService"
import { TypeCard } from "../utils/interfaces"

export async function createCard(req: Request, res: Response){

    const cardData: TypeCard = req.body    
    await cardService.createCard(cardData)
    
    res.send("Card successfully registered").status(200)
}

export async function getCardsByUserId(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const cards = await cardService.getCardsByUserId(userId)

    res.send(cards).status(200)
}

export async function getCardById(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const id : number = Number(req.params.id)
    const credential = await cardService.getCardById(userId, id)

    res.send(credential).status(200)
}

export async function deleteCard(req: Request, res: Response){
    const userId : number = Number(req.params.userId)
    const id : number = Number(req.params.id)
    await cardService.deleteCard(userId, id)

    res.send("Card successfully deleted").status(200)
}