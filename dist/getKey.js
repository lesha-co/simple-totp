"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base32decode_1 = require("./base32decode");
exports.getKey = (input, encoding) => {
    if (Buffer.isBuffer(input))
        return input;
    if (encoding === undefined) {
        throw new Error("Encoding should be provided for string inputs (any Buffer encoding or 'base32')");
    }
    if (encoding === "base32")
        return base32decode_1.base32decode(input);
    return Buffer.from(input, encoding);
};
//# sourceMappingURL=getKey.js.map