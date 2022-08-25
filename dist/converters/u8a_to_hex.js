"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u8a_to_hex = void 0;
const u8a_to_hex = (u8a) => {
    let string = "";
    for (const byte of u8a) {
        string += byte.toString(16).padStart(2, "0");
    }
    return string;
};
exports.u8a_to_hex = u8a_to_hex;
//# sourceMappingURL=u8a_to_hex.js.map