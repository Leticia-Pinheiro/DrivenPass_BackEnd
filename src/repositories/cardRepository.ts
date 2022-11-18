import prisma from "../database/postgres";
import { TypeCard} from "../utils/interfaces";

export async function createCard(
    cardData : TypeCard){    
    await prisma.cards.create({data: cardData})
}

export async function getCardsByUserId(
    userId: number){
    const cards = await prisma.cards.findMany({where: {userId}})
    return cards
}

export async function getCardById(
    userId: number,
    id: number){
    const card = await prisma.cards.findFirst({where: {id, userId}})
    return card
}

export async function deleteCard(    
    id: number){
    await prisma.cards.delete({where: {id}})
}

export async function searchCardByCardName(
    userId: number,
    cardName: string){
    const card = await prisma.cards.findFirst({where: {userId, cardName}})     
    return card   
}