import connection from "../database/postgres"

export async function searchUserByEmail(
    email: string){
    const userData = await connection.query(
        `
        SELECT * FROM users
        WHERE email = $1
        `, [email])    
        
    const example = {
        id: 1,
        email: "leticia@gmail.com",
        password: "abc123"
    }
    return example
}

export async function searchUserById(
    id: number){

    const userData = await connection.query(
        `
        SELECT * FROM users
        WHERE id = $1
        `, [id])    
        
    const example = {
        id: 1,
        email: "leticia@gmail.com",
        password: "abc123"
    }
    return example
}