import 'dotenv/config'
import express, { Request, Response } from 'express'
import candlesRout from './routers/candles/candles.route'
import adminRout from './routers/admin/admin.route'
import { dbconnect } from './DBconnect/dbconnect'
import "express-async-errors";
const app = express()
const PORT = process.env.PORT || 7575
import cors from "cors";
import { errorHandler } from './utils/errors/errorHandler'

app.use(cors<Request>({
    origin: "http://localhost:3000", // process.env.NODE_ENV === 'production' ? "" :
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));

dbconnect()
app.use(express.json());
app.use(errorHandler)
app.get('/', (req: Request, res: Response) => {
    try {
        return res.send("OK")
    } catch (error) {
        return res.send(error)
    }
})

app.use("/candles", candlesRout)
app.use("/admin", adminRout)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});