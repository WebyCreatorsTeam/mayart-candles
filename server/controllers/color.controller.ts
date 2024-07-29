import { NextFunction, Request, Response } from "express";
import { Color } from "../model/color.model";

export const saveCandleColor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const newColor = new Color(data)
        await newColor.save()
        return res.json({ continueWork: true, message: "הצבע נשמר", newColor })
    } catch (error) {
        next(error)
    }
}

export const getAllCandleColors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const colors = await Color.find({})
        return res.json({ continueWork: true, colors })
    } catch (error) {
        next(error)
    }
}

export const deleteColor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body
        await Color.findByIdAndDelete(id)
        return res.json({ continueWork: true, message: "הצבע נמחק" })
    } catch (error) {
        next(error)
    }
}

