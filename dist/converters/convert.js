"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.from_u8a = exports.to_u8a = void 0;
const ascii_to_u8a_1 = require("./ascii_to_u8a");
const base32_to_u8a_1 = require("./base32_to_u8a");
const hex_to_u8a_1 = require("./hex_to_u8a");
const u8a_to_ascii_1 = require("./u8a_to_ascii");
const u8a_to_base32_1 = require("./u8a_to_base32");
const u8a_to_hex_1 = require("./u8a_to_hex");
const to_u8a = (encoding, value) => {
    switch (encoding) {
        case "ascii":
            return (0, ascii_to_u8a_1.ascii_to_u8a)(value);
        case "hex":
            return (0, hex_to_u8a_1.hex_to_u8a)(value);
        case "base32":
            return (0, base32_to_u8a_1.base32_to_u8a)(value);
    }
};
exports.to_u8a = to_u8a;
const from_u8a = (data, encoding) => {
    switch (encoding) {
        case "ascii":
            return (0, u8a_to_ascii_1.u8a_to_ascii)(data);
        case "hex":
            return (0, u8a_to_hex_1.u8a_to_hex)(data);
        case "base32":
            return (0, u8a_to_base32_1.u8a_to_base32)(data);
    }
};
exports.from_u8a = from_u8a;
const convert = (from, to, value) => {
    let u8a;
    switch (from) {
        case "raw":
            u8a = value;
            break;
        default:
            u8a = (0, exports.to_u8a)(from, value);
    }
    switch (to) {
        case "raw":
            return u8a;
        default:
            return (0, exports.from_u8a)(u8a, to);
    }
};
exports.convert = convert;
//# sourceMappingURL=convert.js.map