"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
/**
 * Full implementation of HMAC-based one-time password algorighm
 * @param secretKey secret key in form of a Buffer or a string
 * @param timestamp
 * @param encoding encoding of a secret key in case it's a string
 * @param nDigits length of an OTP
 * @param T0 Epoch of a counter
 * @param Tx Period of a counter
 * @returns
 */
exports.getTOTP = (secretKey, encoding = undefined, timestamp = Date.now(), nDigits = 6, T0 = 0, Tx = 30000) => {
    const { counterBuffer, remainingMs } = _1.getCounterBuffer(timestamp, T0, Tx);
    const totp = _1.getCode(_1.getHMAC(_1.getKey(secretKey, encoding), counterBuffer), nDigits);
    return { totp, remainingMs };
};
//# sourceMappingURL=getTOTP.js.map