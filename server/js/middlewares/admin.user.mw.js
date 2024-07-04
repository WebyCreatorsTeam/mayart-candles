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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIsAdmin = void 0;
const admin_model_1 = require("../model/admin.model");
const httpCodes_1 = require("../utils/httpCodes");
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const userIsAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.query;
        const tokenString = String(token);
        if (token == "null" || token == undefined) {
            return next();
        }
        const { userID } = yield jwt_simple_1.default.decode(tokenString, process.env.SECRET);
        const existAdmin = yield admin_model_1.Admin.findOne({ _id: userID });
        if (!existAdmin) {
            return res.status(httpCodes_1.httpCodes.BAD_REQUEST).json({ continueWork: false, message: "משתמש לא נמצא" });
        }
        if (existAdmin) {
            req.user = existAdmin;
        }
        return next();
    }
    catch (error) {
        next(error);
    }
});
exports.userIsAdmin = userIsAdmin;
//# sourceMappingURL=admin.user.mw.js.map