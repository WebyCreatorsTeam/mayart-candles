"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const dbconnect_1 = require("./DBconnect/dbconnect");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 7575;
const cors_1 = __importDefault(require("cors"));
const error_handles_mw_1 = require("./middlewares/error-handles.mw");
const candle_index_route_1 = __importDefault(require("./routers/candles/candle.index.route"));
const index_admin_route_1 = __importDefault(require("./routers/admin/index.admin.route"));
const category_index_route_1 = __importDefault(require("./routers/category/category.index.route"));
const about_index_route_1 = __importDefault(require("./routers/about/about.index.route"));
const payment_index_route_1 = __importDefault(require("./routers/payment/payment.index.route"));
const cloudinary_1 = require("cloudinary");
const admin_user_mw_1 = require("./middlewares/admin.user.mw");
// middlewares
const corsOrigin = process.env.CORS_ORIGIN;
const corsDev = process.env.CORS_DEV;
const allowedOrigins = [corsOrigin, corsDev];
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    //process.env.NODE_ENV === 'production' ? corsOrigin : corsDev,
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// database connection
(0, dbconnect_1.dbconnect)();
app.use(admin_user_mw_1.userIsAdmin);
app
    .use("/admin", index_admin_route_1.default)
    .use("/candles", candle_index_route_1.default)
    .use('/categories', category_index_route_1.default)
    .use('/about', about_index_route_1.default)
    .use('/payment', payment_index_route_1.default);
// status check points
app.get('/status', (req, res) => res.sendStatus(200));
// 404 handler
app.use(error_handles_mw_1.NotFoundHandler);
// Global Error Handler
app.use(error_handles_mw_1.GlobalErrorHandler);
app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map