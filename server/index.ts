import 'dotenv/config'
import morgan from 'morgan';
import express, { Request, Response } from 'express'
import { dbconnect } from './DBconnect/dbconnect'
const app = express()
const PORT = process.env.PORT || 7575
import cors from "cors";
import { GlobalErrorHandler, NotFoundHandler } from './middlewares/error-handles.mw';
import candlesRout from './routers/candles/candles.route'
import adminRout from './routers/admin/admin.route'
import categoriesRoute from './routers/category/category.route'
import aboutRoute from './routers/about/about.route'
import {v2 as cloudinary} from "cloudinary";

// middlewares
app.use(cors<Request>({
    origin: "http://localhost:3000", // process.env.NODE_ENV === 'production' ? "" :
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

app.use(morgan('dev'))
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// database connection
dbconnect()

app
    .use("/admin", adminRout)
    .use("/candles", candlesRout)
    .use('/categories', categoriesRoute)
    .use('/about', aboutRoute)

// status check points
app.get('/status', (req: Request, res: Response) => res.sendStatus(200))

// 404 handler
app.use(NotFoundHandler)

// Global Error Handler
app.use(GlobalErrorHandler)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});