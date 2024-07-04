import { NextFunction, Request, Response } from "express"
import { httpCodes } from "../utils/httpCodes"

/**
 * Middleware to check if the user is logged in.
 * If the user is not logged in, it returns a 404 error.
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 * @returns {Promise<void>}
 */
export const userIsLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Check if the user is logged in
        if (!req.user) {
            // If the user is not logged in, return a 404 error
            console.log(`message: "נא להיכנס למשתמש"`); // Log the error message
            return res.status(httpCodes.NOT_FOUND).send({ // Return a 404 error
                continueWork: false, // Set continueWork to false
                message: "נא להיכנס למשתמש" // Set the error message
            }); // Return the error object
        }

        return next()
    } catch (error) {
        // If there is an error, pass it to the next middleware
        next(error);
    }
}
