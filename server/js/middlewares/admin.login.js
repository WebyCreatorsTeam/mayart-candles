"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIsLogin = void 0;
const httpCodes_1 = require("../utils/httpCodes");
/**
 * Middleware to check if the user is logged in.
 * If the user is not logged in, it returns a 404 error.
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 * @returns {Promise<void>}
 */
const userIsLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if the user is logged in
        if (!req.user) {
            // If the user is not logged in, return a 404 error
            console.log(`message: "נא להיכנס למשתמש"`); // Log the error message
            return res.status(httpCodes_1.httpCodes.NOT_FOUND).send({
                continueWork: false, // Set continueWork to false
                message: "נא להיכנס למשתמש" // Set the error message
            }); // Return the error object
        }
        return next();
    }
    catch (error) {
        // If there is an error, pass it to the next middleware
        next(error);
    }
});
exports.userIsLogin = userIsLogin;
//# sourceMappingURL=admin.login.js.map