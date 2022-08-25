"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKey = void 0;
const converters_1 = require("../converters");
/**
 * creates a Uint8Array with your secret key to use in HMAC. You don't need
 * this function if your secret key is already a Uint8Array.
 * @param input your secret key, in form of a Uint8Array or a string (strings need
 * to specify encoding)
 * @param encoding if your secret key is a string, specify encoding.
 * @returns your secret key
 */
const getKey = (input, encoding) => {
    if (input instanceof Uint8Array)
        return input;
    if (encoding === undefined) {
        throw new Error("Encoding should be provided for string inputs");
    }
    switch (encoding) {
        case "ascii":
            return (0, converters_1.ascii_to_u8a)(input);
        case "base32":
            return (0, converters_1.base32_to_u8a)(input);
        case "hex":
            return (0, converters_1.hex_to_u8a)(input);
    }
};
exports.getKey = getKey;
//# sourceMappingURL=getKey.js.map