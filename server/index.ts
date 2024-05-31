import 'dotenv/config'
import morgan from 'morgan';
import express, { Request, Response } from 'express'
import { dbconnect } from './DBconnect/dbconnect'
const app = express()
const PORT = process.env.PORT || 7575
import cors from "cors";
import router from './routers/index'
import { GlobalErrorHandler, NotFoundHandler } from './middlewares/error-handles.mw';

// middlewares
app.use(cors<Request>({
    origin: "http://localhost:3000", // process.env.NODE_ENV === 'production' ? "" :
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));

app.use(morgan('dev'))
app.use(express.json());

// database connection
dbconnect()

// status check points
// app.get("/status", (req, res)=> {res.sendStatus(200)})

// routes
// app.use("/", router)


import candlesRout from './routers/candles/candles.route'
import adminRout from './routers/admin/admin.route'
import categoriesRoute from './routers/category/category.route'

app
    .use("/admin", adminRout)
    .use("/candles", candlesRout)
    .use('/categories', categoriesRoute)

// status check points
router.get('/status', (req: Request, res: Response) => res.sendStatus(200))

// 404 handler
// app.use(NotFoundHandler)

// Global Error Handler
// app.use(GlobalErrorHandler)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});