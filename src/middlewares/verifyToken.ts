import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

function verifyToken(req: Request, res: Response, next: NextFunction) {
	const getToken = req.headers["authorization"];
	const token = getToken?.replace("Bearer ", "");

	if (!token) {
		throw {
			code: "Unauthorized",
			message: "A token is required for authentication",
		};
	}
	
		const decoded = jwt.verify(token, process.env.SECRET_KEY_TOKEN);

		res.locals.tokenDecoded = decoded;

		next();
	
}

export default verifyToken;