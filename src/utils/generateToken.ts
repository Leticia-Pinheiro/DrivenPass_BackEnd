import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import {IUser} from "./interfaces"

dotenv.config();

export function generateToken(id: number) {   
		
	const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;

	const jwtConfig = {
		expiresIn: EXPIRES_IN
	  };
  
	  const token = jwt.sign({id}, SECRET, jwtConfig);
  
	  return token;
}