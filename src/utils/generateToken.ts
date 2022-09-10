import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import {IUser} from "./interfaces"

dotenv.config();

export function generateToken(id: number) {   
	
		const token = jwt.sign(
			{
				id: id,
			},
			process.env.SECRET_KEY_TOKEN,
            { expiresIn: 20 * 60 }
		);

		return token	
}