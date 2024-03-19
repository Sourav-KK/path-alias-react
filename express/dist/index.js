"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("module-alias/register");
const adminRoute_1 = __importDefault(require("@routes/Admin/adminRoute"));
const userRoute_1 = __importDefault(require("@routes/User/userRoute"));
const app = (0, express_1.default)();
const PORT_NO = 3000;
app.use("/", userRoute_1.default);
app.use("/admin", adminRoute_1.default);
app.listen(PORT_NO, () => {
    console.log(`Server started on ${PORT_NO}`);
});
exports.default = app;
