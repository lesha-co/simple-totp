"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u8a_to_ascii = void 0;
const u8a_to_ascii = (u8a) => {
    let string = "";
    for (const byte of u8a) {
        string += String.fromCharCode(byte);
    }
    return string;
};
exports.u8a_to_ascii = u8a_to_ascii;
//# sourceMappingURL=u8a_to_ascii.js.map