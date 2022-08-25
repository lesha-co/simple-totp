"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ascii_to_u8a = void 0;
const ascii_to_u8a = (str) => {
    const result = new Uint8Array(str.length).map((_, i) => str.codePointAt(i) ?? 0);
    return result;
};
exports.ascii_to_u8a = ascii_to_u8a;
//# sourceMappingURL=ascii_to_u8a.js.map