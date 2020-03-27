"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
exports.getHMAC = function (secret, message) {
    return crypto_1.default
        .createHmac("sha1", secret)
        .update(message)
        .digest();
};
//# sourceMappingURL=getHMAC.js.map