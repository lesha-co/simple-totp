"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base32decode_1 = require("./base32decode");
var util_1 = require("./util");
exports.default = (function (base32key, nDigits, prefix) {
    if (nDigits === void 0) { nDigits = 6; }
    if (prefix === void 0) { prefix = ""; }
    var secret = base32decode_1.base32decode(base32key);
    if (!secret)
        throw new Error("secret is invalid");
    return prefix + util_1.totp(secret, nDigits);
});
//# sourceMappingURL=index.js.map