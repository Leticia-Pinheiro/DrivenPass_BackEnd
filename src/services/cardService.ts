import * as validationService from "./validationService"
import * as cardRepository from "../repositories/cardRepository"
import { TypeCard } from "../utils/interfaces"
import { EncryptData, DecryptData } from "../utils/cryptr"
import { cards } from "@prisma/client"

export async function createCard(
    cardData: TypeCard){
    
    const {userId,
        cardName,
        number,
        printedName,
        securityCode,
        expirationDate,
        password,
        isVirtual,
        type} = cardData

    await validationService.validateCreateCard(userId, cardName)
    const encryptedSecurityCode = EncryptData(securityCode)
    const encryptedPassword = EncryptData(password)
    await cardRepository.createCard({...cardData, securityCode: encryptedSecurityCode, password: encryptedPassword})
    // await cardRepository.createCard({userId, cardName, number, printedName, securityCode: encryptedSecurityCode, expirationDate, password: encryptedPassword, isVirtual, type})
}

export async function getCardsByUserId(
    userId: number){

    await validationService.validateGetCards(userId)
    const cards = await cardRepository.getCardsByUserId(userId)
    const newCards = cards.map(c => {
        const decryptPassword = DecryptData(c.password)
        const decryptSecurityCode = DecryptData(c.securityCode)

        const newCard = 
        {    
            id: c.id,
            userId: c.userId,
            cardName: c.cardName,
            number: c.number,
            printedName: c.printedName,
            securityCode: decryptSecurityCode,         
            expirationDate: c.expirationDate,
            password: decryptPassword,            
            isVirtual: c.isVirtual,
            type: c.type
        }
                
        return newCard
    })

    return newCards
}

export async function getCardById(
    userIdInformed: number,
    idInformed: number){

    const {id, userId, cardName, number, printedName, securityCode, expirationDate, password, isVirtual, type} : cards = await validationService.validateGetCardById(userIdInformed, idInformed)
    
    const decryptPassword = DecryptData(password)
        const decryptSecurityCode = DecryptData(securityCode)

        const newCard = 
        {    
            id,
            userId,
            cardName,
            number,
            printedName,
            securityCode: decryptSecurityCode,         
            expirationDate,
            password: decryptPassword,            
            isVirtual,
            type
        }

    return newCard
}

export async function deleteCard(
    userId: number,
    id: number){

    await validationService.validateDeleteCard(userId, id)
    await cardRepository.deleteCard(id)
}