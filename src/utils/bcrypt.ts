import bcrypt from "bcrypt"

export function EncryptData(data: string){    
    const HASH = 10
    const encryptedData = bcrypt.hashSync(data, HASH)

    return encryptedData
}