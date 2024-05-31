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
const index_1 = __importDefault(require("./routers/index"));
// middlewares
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // process.env.NODE_ENV === 'production' ? "" :
    methods: ["POST", "GET", "DELETE", "PATCH"],
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// database connection
(0, dbconnect_1.dbconnect)();
// status check points
// app.get("/status", (req, res)=> {res.sendStatus(200)})
// routes
// app.use("/", router)
const candles_route_1 = __importDefault(require("./routers/candles/candles.route"));
const admin_route_1 = __importDefault(require("./routers/admin/admin.route"));
const category_route_1 = __importDefault(require("./routers/category/category.route"));
app
    .use("/admin", admin_route_1.default)
    .use("/candles", candles_route_1.default)
    .use('/categories', category_route_1.default);
// status check points
index_1.default.get('/status', (req, res) => res.sendStatus(200));
// 404 handler
// app.use(NotFoundHandler)
// Global Error Handler
// app.use(GlobalErrorHandler)
app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map