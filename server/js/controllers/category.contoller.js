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
exports.removeCategory = exports.addCategory = exports.getAllCategosies = void 0;
const category_model_1 = require("../model/category.model");
// /categories/get-categories
const getAllCategosies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.Category.find({});
        return res.json({ continueWork: true, categories });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCategosies = getAllCategosies;
// /categories/save-category
const addCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newCategory = new category_model_1.Category(data);
        yield newCategory.save();
        return res.json({ continueWork: true, message: "קטיגוריה נשמרה", newCategory });
    }
    catch (error) {
        next(error);
    }
});
exports.addCategory = addCategory;
const removeCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        yield category_model_1.Category.findByIdAndDelete(id);
        return res.json({ continueWork: true, message: "קטיגוריה נמחקה" });
    }
    catch (error) {
        next(error);
    }
});
exports.removeCategory = removeCategory;
//# sourceMappingURL=category.contoller.js.map