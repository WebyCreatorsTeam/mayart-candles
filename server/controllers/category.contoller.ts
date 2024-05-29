import { Request, Response } from 'express'
import { Category } from '../model/category.model'
import { httpCodes } from '../utils/httpCodes'

export const getAllCategosies = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find({})
        return res.status(200).json({continueWork: true, categories})
    } catch (error) {
        console.log(`category.contoller cont error getAllCategosies`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}

export const addCategory = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const newCategory = new Category(data)
        await newCategory.save()
        return res.status(200).json({ continueWork: true, message: "candle saved" })
    } catch (error) {
        console.log(`category.contoller cont error addCategory`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}