"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provide human-readable representation of HMAC
 * @param hmac hash to format
 * @param nDigits length of code
 * @returns human-readable code
 */
exports.getCode = (hmac, nDigits) => {
    // Truncation first takes the 4 least significant bits of the MAC
    const offset = hmac.readUInt8(hmac.length - 1) & 0xf;
    // and uses them as a byte offset `offset`. That index i is used to select
    // 31 bits from MAC
    const fourBytes = hmac.readUInt32BE(offset) & 0x7fffffff;
    // The HOTP value is the human-readable design output, a `nDigits`-digit
    // decimal number (without omission of leading 0s):
    return (fourBytes % 10 ** nDigits).toString(10).padStart(nDigits, "0");
};
//# sourceMappingURL=getCode.js.map