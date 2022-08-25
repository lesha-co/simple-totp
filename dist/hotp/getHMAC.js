"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHMAC = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * Quick shortcut to creating HMACs
 * @param secret Secret key
 * @param message Message to hash
 * @returns HMAC of your message
 */
const getHMAC = (secret, message) => {
    const buf = crypto_1.default.createHmac("sha1", secret).update(message).digest();
    const u8a = new Uint8Array(buf);
    return u8a;
};
exports.getHMAC = getHMAC;
//# sourceMappingURL=getHMAC.js.map