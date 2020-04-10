"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCode_1 = require("./getCode");
var getCounter_1 = require("./getCounter");
var getHMAC_1 = require("./getHMAC");
var getKey_1 = require("./getKey");
exports.getTOTP = function (seed, encoding, timestamp, nDigits, T0, Tx) {
    if (timestamp === void 0) { timestamp = Date.now(); }
    if (nDigits === void 0) { nDigits = 6; }
    if (T0 === void 0) { T0 = 0; }
    if (Tx === void 0) { Tx = 30000; }
    var secret = getKey_1.getKey(seed, encoding);
    var _a = getCounter_1.getCounter(timestamp, T0, Tx), counterBuffer = _a.counterBuffer, remainingMs = _a.remainingMs;
    var hmac = getHMAC_1.getHMAC(secret, counterBuffer);
    var totp = getCode_1.getCode(hmac, nDigits);
    return { totp: totp, remainingMs: remainingMs };
};
//# sourceMappingURL=getTOTP.js.map