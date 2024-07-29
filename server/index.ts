import 'dotenv/config'
import morgan from 'morgan';
import express, { Request, Response, NextFunction } from 'express'
import { dbconnect } from './DBconnect/dbconnect'
const app = express()
const PORT = process.env.PORT || 7575
import cors from "cors";
import { GlobalErrorHandler, NotFoundHandler } from './middlewares/error-handles.mw';
import candlesRout from './routers/candles/candle.index.route'
import adminRout from './routers/admin/index.admin.route'
import categoriesRoute from './routers/category/category.index.route'
import aboutRoute from './routers/about/about.index.route'
import paymentRoute from './routers/payment/payment.index.route';
import orderRoute from './routers/order/order.router';
import colorRoute from './routers/colors/color.index.route';
import { v2 as cloudinary } from "cloudinary";
import { userIsAdmin } from './middlewares/admin.user.mw';

// middlewares
const corsOrigin = process.env.CORS_ORIGIN;
const corsDev = process.env.CORS_DEV;
const allowedOrigins = [corsOrigin, corsDev];
app.use(cors<Request>({
    origin: 
    function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    //process.env.NODE_ENV === 'production' ? corsOrigin : corsDev,
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

app.use(morgan('dev'))
app.use(express.json());

// database connectio
dbconnect() 

app.use(userIsAdmin)

app
    .use("/admin", adminRout)
    .use("/candles", candlesRout)
    .use('/categories', categoriesRoute)
    .use('/about', aboutRoute)
    .use('/payment', paymentRoute)
    .use('/orders', orderRoute)
    .use('/colors', colorRoute)

// status check points
app.get('/status', (req: Request, res: Response) => res.sendStatus(200))

// 404 handler
app.use(NotFoundHandler)

// Global Error Handler
app.use(GlobalErrorHandler)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});