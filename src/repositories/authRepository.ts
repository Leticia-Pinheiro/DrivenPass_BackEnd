import connection from "../database/postgres"

export async function createUser(
    email: string, 
    password: string){
    await connection.query(
        `
        INSERT INTO users (email, password)
        VALUES ($1, $2)
        `, [email, password])        
}



