import 'dotenv/config'
//import * as dotenv from 'dotenv'
//dotenv.config({ path: __dirname + '/.env' })
import express, { Request, Response } from 'express'
import candlesRout from './routers/candles/candles'
import { dbconnect } from './DBconnect/dbconnect'
const app = express()
const PORT = process.env.PORT || 7575

dbconnect()
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    try {
        return res.send("OK")
    } catch (error) {
        return res.send(error)
    }
})

app.use("/candles", candlesRout)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});