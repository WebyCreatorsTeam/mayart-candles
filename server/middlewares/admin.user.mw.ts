import { NextFunction, Request, Response } from "express"
import { Admin } from "../model/admin.model"
import { httpCodes } from "../utils/httpCodes"
import jwt from "jwt-simple";

export const userIsAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.query
        const tokenString: string = String(token);
        
        if (token == "null" || token == undefined) {
            return next()
        }
        const { userID } = await jwt.decode(tokenString, process.env.SECRET!)
        const existAdmin = await Admin.findOne({ _id: userID })

        if (!existAdmin) {
            return res.status(httpCodes.BAD_REQUEST).json({ continueWork: false, message: "משתמש לא נמצא" })
        }

        if (existAdmin) {
            req.user = existAdmin
        }

        return next()
    } catch (error) {
        next(error)
    }
}