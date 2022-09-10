import connection from "../database/postgres"

export async function signUp(
    email: string, 
    password: string){
    await connection.query(
        `
        `)

        const result = "ola"
        return result
}

export async function signIn(){
    await connection.query(
        `
        `)
}

export async function searchUserByEmail(
    email: string){
    
        //procurar user por email 
        //retornar dados do usuario email, password, token
        const result = {
            id: 1,
            email: "leticia@gmail.com",
            password: "abc123"
        }
        return result
}

