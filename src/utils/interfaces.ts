export type TransactionTypes =
	| "groceries"
	| "restaurant"
	| "transport"
	| "education"
	| "health"

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
	id? : number
	email: string
	password: string	
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