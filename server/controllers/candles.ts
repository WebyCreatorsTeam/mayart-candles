import { Request, Response } from 'express'

export const getAllCandles = (req: Request, res: Response) => {
    try {
        return res.send("All ccccc")
    } catch (error) {
        return res.send(error)
    }
}