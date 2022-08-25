"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex_to_u8a = void 0;
const hex_to_u8a = (str) => {
    if (str.length % 2)
        throw new Error("odd string length");
    const result = new Uint8Array(str.length / 2);
    for (let index = 0; index < result.length; index++) {
        const hex = str.slice(index * 2, index * 2 + 2);
        result[index] = parseInt(hex, 16);
    }
    return result;
};
exports.hex_to_u8a = hex_to_u8a;
//# sourceMappingURL=hex_to_u8a.js.map