import prisma from "../database/postgres";
import { ICard , CardTypes, TypeCard} from "../utils/interfaces";

export async function createCard(
    cardData : TypeCard){

    // const {userId, cardName, number, printedName, securityCode, expirationDate, password, isVirtual, type} = cardData
        
    // await connection.query(
    //     `
    //     INSERT INTO cards ("userId", "cardName", number, "printedName", "securityCode", "expirationDate", password, "isVirtual", type)
    //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    //     `, [userId, cardName, number, printedName, securityCode, expirationDate, password, isVirtual, type])

    await prisma.cards.create({data: cardData})
}

export async function getCardsByUserId(
    userId: number){

    // const cards = await connection.query(
    //     `
    //     SELECT * FROM cards 
    //     WHERE userId = $1
    //     `, [userId])

    
    const cards = await prisma.cards.findMany({where: {userId: userId}})
    return cards
}

export async function getCardById(
    userId: number,
    id: number){

    // const card = await connection.query<ICard>(
    //     `
    //     SELECT * FROM cards
    //     WHERE userId = $1
    //     AND id = $2
    //     `, [userId, id])

    const card = await prisma.cards.findUnique({where: {id: id, userId: userId}})

    

    return card
}

export async function deleteCard(    
    id: number){

    await connection.query(
        `
        DELETE FROM cards
        WHERE id = $1        
        `, [id])
}

export async function searchCardByCardName(
    userId: number,
    cardName: string){

    const card = await connection.query(
        `
        SELECT * FROM cards 
        WHERE userId = $1
        AND cardName = $2
        `, [userId, cardName])

    const example = {
        id: 1,
        userId: 1,
        cardName: "Nubank",
        number: "1111 2222 3333 3333",
        printedName: "Leticia G Pinheiro",
        securityCode: "111",
        expirationDate: "12/28",
        password: "1597",
        isVirtual: false,
        type: "both"
    }

    return card.rows[0]
}