"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __importDefault(require("../lib"));
var secret = process.env.SECRET;
var prefix = process.env.PREFIX;
console.log(lib_1.default(secret, 6, prefix));
//# sourceMappingURL=index.js.map