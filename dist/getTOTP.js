"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCode_1 = require("./getCode");
const getCounter_1 = require("./getCounter");
const getHMAC_1 = require("./getHMAC");
const getKey_1 = require("./getKey");
exports.getTOTP = (seed, encoding, timestamp = Date.now(), nDigits = 6, T0 = 0, Tx = 30000) => {
    const secret = getKey_1.getKey(seed, encoding);
    const { counterBuffer, remainingMs } = getCounter_1.getCounter(timestamp, T0, Tx);
    const hmac = getHMAC_1.getHMAC(secret, counterBuffer);
    const totp = getCode_1.getCode(hmac, nDigits);
    return { totp, remainingMs };
};
//# sourceMappingURL=getTOTP.js.map