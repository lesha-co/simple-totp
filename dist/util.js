"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
exports.hmacResultToCode = function (hmac, nDigits) {
    var offset = hmac.readUInt8(hmac.length - 1) & 0xf;
    var fourBytes = hmac.readUInt32BE(offset) & 0x7fffffff;
    return (fourBytes % Math.pow(10, nDigits)).toString(10).padStart(nDigits, "0");
};
exports.getCounter = function (timestamp) {
    var date = timestamp || Date.now();
    var counter = Math.floor(date / 30000);
    var counterBuffer = Buffer.alloc(8, 0);
    // TODO: since node v12 you can use writeBigInt64BE(counter, 0)
    counterBuffer.writeUInt32BE(counter, 4);
    return counterBuffer;
};
exports.totp = function (secret, nDigits) {
    if (nDigits === void 0) { nDigits = 6; }
    var hmac = crypto_1.default.createHmac("sha1", secret);
    hmac.update(exports.getCounter());
    return exports.hmacResultToCode(hmac.digest(), nDigits);
};
//# sourceMappingURL=util.js.map