"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = exports.NotFoundHandler = void 0;
const httpCodes_1 = require("../utils/httpCodes");
// 404 handler
const NotFoundHandler = (req, res, next) => {
    const error = new Error("route not founded");
    error['status'] = httpCodes_1.httpCodes.NOT_FOUND;
    next(error);
};
exports.NotFoundHandler = NotFoundHandler;
//Global Error
const GlobalErrorHandler = (error, req, res, next) => {
    console.log(error.message || "שגיא בסרבר, נא לנסות שנית");
    res.status(error.status || 500).json({ continueWork: false, message: error.message || "שגיא בסרבר, נא לנסות שנית" });
};
exports.GlobalErrorHandler = GlobalErrorHandler;
//# sourceMappingURL=error-handles.mw.js.map