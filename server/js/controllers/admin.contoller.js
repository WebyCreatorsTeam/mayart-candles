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
exports.loginAdmin = exports.registAdmin = void 0;
const admin_model_1 = require("../model/admin.model");
const adminValidation_1 = require("../utils/validation/adminValidation");
const httpCodes_1 = require("../utils/httpCodes");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const registAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { error } = adminValidation_1.regValid.validate(data);
        if (error) {
            console.error("admin.controller validation error of RegistAdmin:", error.message);
            return res.status(httpCodes_1.httpCodes.UNAUTHORIZED).json({ continueWork: false, message: error.message });
        }
        const hashpass = yield bcryptjs_1.default.hash(data.password, 10);
        const newAdmin = new admin_model_1.Admin(Object.assign(Object.assign({}, data), { password: hashpass }));
        console.log(newAdmin);
        yield newAdmin.save();
        return res.status(httpCodes_1.httpCodes.OK).json({ continueWork: true, message: "משתמש חדש נשמר" });
    }
    catch (error) {
        console.log(`admin.controller cont error addAdmin`);
        console.error(error);
        return res.status(httpCodes_1.httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" });
    }
});
exports.registAdmin = registAdmin;
const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // console.log(data)
        const { error } = adminValidation_1.loginValid.validate(data);
        if (error) {
            console.error("admin.controller validation error of loginAdmin:", error.message);
            return res.status(httpCodes_1.httpCodes.UNAUTHORIZED).json({ continueWork: false, message: error.message });
        }
        const existAdmin = yield admin_model_1.Admin.findOne({ email: data.email });
        // console.log(existAdmin)
        if (!existAdmin) {
            console.log("admin.controller user not exist loginAdmin");
            return res.status(httpCodes_1.httpCodes.NOT_FOUND).json({ continueWork: false, message: "משתמש לא קיים" });
        }
        const comparePass = yield bcryptjs_1.default.compare(data.password, existAdmin.password);
        if (!comparePass) {
            console.log(`admin.controller Password not correc loginAdmin`);
            return res.status(httpCodes_1.httpCodes.UNAUTHORIZED).json({ continueWork: false, message: "הסיסמא לא נכונה" });
        }
        const cookiesData = { userID: existAdmin._id };
        const token = jwt_simple_1.default.encode(cookiesData, process.env.SECRET);
        return res.status(httpCodes_1.httpCodes.OK).json({ continueWork: true, token });
    }
    catch (error) {
        console.log(`admin.controller cont error loginAdmin`);
        console.error(error);
        return res.status(httpCodes_1.httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" });
    }
});
exports.loginAdmin = loginAdmin;
//# sourceMappingURL=admin.contoller.js.map