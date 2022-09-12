import { users, cards, credentials, notes } from '@prisma/client'



export type TransactionTypes =
	| "groceries"
	| "restaurant"
	| "transport"
	| "education"
	| "health"

	export type CardTypes =
	| "credit"
	| "debt"
	| "both"
	

export interface Card{    
	employeeId: number
	number: string
	cardholderName: string
	securityCode: string
	cardExpirationDate: string
	password?: string
	isVirtual: boolean
	originalCardId?: number
	isBlocked: boolean
	type: TransactionTypes
}

export interface IUser{    
	id?: number;
	email: string;
	password: string;	
}

export interface ICredential{    
	id?: number;
    userId: number;
    credentialName: string;
    url: string;
    userName: string;
    password: string;
}

export interface INote{
	id?: number;
	userId: number;
	title: string;
	note: string;
}

export interface ICard{
	id?: number;
	userId: number;
	cardName: string;
	number: string;
	printedName: string;
	securityCode: string;	
	expirationDate: string;
	password: string;	
	isVirtual: boolean;
	type: string;
}


export type TypeCard = Omit<cards, 'id'>

export type Decimal = number