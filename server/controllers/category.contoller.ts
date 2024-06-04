import { NextFunction, Request, Response } from 'express'
import { Category } from '../model/category.model'

// /categories/get-categories
export const getAllCategosies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await Category.find({})
        return res.json({continueWork: true, categories})
    } catch (error) {
        next(error)
    }
}

// /categories/save-category
export const addCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const newCategory = new Category(data)
        await newCategory.save()
        return res.json({ continueWork: true, message: "קטיגוריה נשמרה", newCategory })
    } catch (error) {
        next(error)
    }
}