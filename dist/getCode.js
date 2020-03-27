"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = function (hmac, nDigits) {
    var offset = hmac.readUInt8(hmac.length - 1) & 0xf;
    var fourBytes = hmac.readUInt32BE(offset) & 0x7fffffff;
    return (fourBytes % Math.pow(10, nDigits)).toString(10).padStart(nDigits, "0");
};
//# sourceMappingURL=getCode.js.map