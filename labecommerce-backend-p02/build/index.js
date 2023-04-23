"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dataProducts_1 = require("./data/dataProducts");
const dataPersons_1 = require("./data/dataPersons");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/products", (req, res) => {
    res.send({ products: dataProducts_1.dataProducts });
});
app.get("/users/list", (req, res) => {
    res.send({ users: dataPersons_1.dataPersons });
});
app.get("/", (req, res) => {
    res.send({ users: dataPersons_1.dataPersons });
});
app.listen(3113, () => {
    console.log("Servidor rodando na porta 3113");
});
//# sourceMappingURL=index.js.map