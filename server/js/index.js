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
const candles_route_1 = __importDefault(require("./routers/candles/candles.route"));
const admin_route_1 = __importDefault(require("./routers/admin/admin.route"));
const category_route_1 = __importDefault(require("./routers/category/category.route"));
const about_route_1 = __importDefault(require("./routers/about/about.route"));
// middlewares
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // process.env.NODE_ENV === 'production' ? "" :
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_KEY,
//     api_secret: process.env.CLOUD_SECRET
// });
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// app.use(express.urlencoded({extended:true}));
// database connection
(0, dbconnect_1.dbconnect)();
app
    .use("/admin", admin_route_1.default)
    .use("/candles", candles_route_1.default)
    .use('/categories', category_route_1.default)
    .use('/about', about_route_1.default);
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