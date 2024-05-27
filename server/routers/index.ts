import { Request, Response, Router } from "express";
const router = Router()

router.get('/', (req: Request, res: Response) => {
    try {
        return res.send("OK")
    } catch (error) {
        return res.send(error)
    }
})

export default router