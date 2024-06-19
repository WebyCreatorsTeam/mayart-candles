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
exports.removeAdmin = exports.getAllAdmins = exports.loginAdmin = exports.registAdmin = void 0;
const admin_model_1 = require("../model/admin.model");
const adminValidation_1 = require("../utils/validation/adminValidation");
const httpCodes_1 = require("../utils/httpCodes");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
//      /admin/reg-admin
const registAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { error } = adminValidation_1.regValid.validate(data);
        if (error) {
            console.log("error valid");
            return res.status(httpCodes_1.httpCodes.BAD_REQUEST).json({ continueWork: false, message: error.message });
        }
        const hashpass = yield bcryptjs_1.default.hash(data.password, 10);
        console.log(hashpass);
        const newAdmin = new admin_model_1.Admin(Object.assign(Object.assign({}, data), { password: hashpass }));
        console.log(newAdmin);
        yield newAdmin.save().then(() => {
            return res.json({ continueWork: true, message: "משתמש חדש נשמר" });
        }).catch(err => {
            if (err)
                return res.status(httpCodes_1.httpCodes.BAD_REQUEST).json({ continueWork: false, message: "משתמש קיים" });
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registAdmin = registAdmin;
//      /admin/login-admin
const loginAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { error } = adminValidation_1.loginValid.validate(data);
        if (error) {
            return res.status(httpCodes_1.httpCodes.UNAUTHORIZED).json({ continueWork: false, message: error.message });
        }
        const existAdmin = yield admin_model_1.Admin.findOne({ email: data.email });
        if (!existAdmin) {
            return res.status(httpCodes_1.httpCodes.NOT_FOUND).json({ continueWork: false, message: "משתמש לא קיים" });
        }
        const comparePass = yield bcryptjs_1.default.compare(data.password, existAdmin.password);
        if (!comparePass) {
            return res.status(httpCodes_1.httpCodes.UNAUTHORIZED).json({ continueWork: false, message: "הסיסמא לא נכונה" });
        }
        const cookiesData = { userID: existAdmin._id };
        const token = jwt_simple_1.default.encode(cookiesData, process.env.SECRET);
        return res.json({ continueWork: true, token });
    }
    catch (error) {
        next(error);
    }
});
exports.loginAdmin = loginAdmin;
//      /admin/all-admins
const getAllAdmins = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admins = yield admin_model_1.Admin.find({}).select("-password");
        return res.json({ continueWork: true, admins });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllAdmins = getAllAdmins;
//      /admin/remove-admin
const removeAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield admin_model_1.Admin.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "משתמש נמחק בהצלחה" });
    }
    catch (error) {
        next(error);
    }
});
exports.removeAdmin = removeAdmin;
//# sourceMappingURL=admin.contoller.js.map