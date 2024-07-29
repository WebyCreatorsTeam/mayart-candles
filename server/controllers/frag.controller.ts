import { NextFunction, Request, Response } from "express";
import { Frag } from "../model/frag.model";
// import { Color } from "../model/color.model";

export const saveCandleFrag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { fragrance } = req.body;
        const newFrag = new Frag({ name: fragrance })
        await newFrag.save()
        return res.json({ continueWork: true, message: "הצבע נשמר", newFrag })
    } catch (error) {
        next(error)
    }
}

export const getAllCandleFrags = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const frags = await Frag.find({})
        return res.json({ continueWork: true, frags })
    } catch (error) {
        next(error)
    }
}

export const deleteFrag = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body
        await Frag.findByIdAndDelete(id)
        return res.json({ continueWork: true, message: "הריח נמחק" })
    } catch (error) {
        next(error)
    }
}

