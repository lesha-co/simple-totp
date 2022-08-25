"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTOTP = void 0;
const _1 = require(".");
/**
 * Full implementation of HMAC-based one-time password algorighm
 * @param secretKey secret key in form of a Uint8Array or a string
 * @param timestamp
 * @param encoding encoding of a secret key in case it's a string
 * @param nDigits length of an OTP
 * @param T0 Epoch of a counter
 * @param Tx Period of a counter
 * @returns
 */
const getTOTP = (secretKey, encoding = undefined, timestamp = Date.now(), nDigits = 6, T0 = 0, Tx = 30000) => {
    const { counterValue, remainingMs } = (0, _1.getCounterValue)(timestamp, T0, Tx);
    const totp = (0, _1.getCode)((0, _1.getHMAC)((0, _1.getKey)(secretKey, encoding), counterValue), nDigits);
    return { totp, remainingMs };
};
exports.getTOTP = getTOTP;
//# sourceMappingURL=getTOTP.js.map