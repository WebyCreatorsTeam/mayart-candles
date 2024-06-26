"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValid = exports.regValid = void 0;
const Joi = __importStar(require("joi"));
const email = Joi
    .string()
    .email()
    .messages({
    'string.email': "האימייל לא תקין",
    'string.empty': "אימייל לא יכול להיות ריק",
});
const password = Joi
    .string()
    .min(6)
    .pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$'))
    .messages({
    'string.pattern.base': "הסיסמא חייבת לכלול מספרים ואותיות באנגלית, לפחות תו אחד מיודח !@#$%^&* וללא רווחים",
    'string.min': "הסיסמא חייבת לכלול לפחות 6 תווים"
});
exports.regValid = Joi.object({
    name: Joi.string().min(2).required().messages({
        'string.empty': "השם לא יכול להיות ריק",
        'string.min': "השם חייב לכלול מינימום שני תווים",
    }),
    email,
    password
});
exports.loginValid = Joi.object({
    email,
    password
});
//# sourceMappingURL=adminValidation.js.map