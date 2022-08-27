"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const videos_router_1 = require("./videos-router");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express = require('express');
const app = express();
app.use((0, cors_1.default)());
app.use((0, body_parser_1.default)());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/videos', videos_router_1.videoRoute);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map