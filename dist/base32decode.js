"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
var padding = "=";
exports.base32decode = function (b32string) {
    if (b32string.length % 8)
        throw new Error("input should have length of multiple of 8");
    var codepoints = Array.from(b32string).map(function (x) { return alphabet.indexOf(x); });
    if (codepoints.some(function (x) { return x === -1; }))
        throw new Error("Illegal characters found in input");
    var buf = Buffer.alloc((b32string.length * 5) / 8);
    codepoints.forEach(function (code, index, array) {
        // 000000001111111122222222  bytes
        // **********OOOOO*********  third character will have these bits to it
        // --------->                bitOffset = 2x5= 10
        //         ->                offsetInByte = 10%8= 2
        //          <---------------> u16
        //                 <-------- shiftInU16 = 9
        var bitOffset = index * 5;
        // we need to know which byte corresponds to given bit offset
        var startingByte = Math.floor(bitOffset / 8);
        // we need to know how far we are into this byte
        var offsetInByte = bitOffset % 8;
        // we will work with u16 because our 5 bits can cross byte border and it's easier to just
        // assume that we're working with u16s
        var shiftInU16 = 16 - 5 - offsetInByte;
        if (index === array.length - 1) {
            // in case of last character startingByte would be the last one and we can't read u16
            // anymore, in that case we will work with u8
            var u8 = buf.readUInt8(startingByte);
            var newU8 = u8 | code;
            buf.writeUInt8(newU8, startingByte);
        }
        else {
            var u16 = buf.readUInt16BE(startingByte);
            var newU16 = u16 | (code << shiftInU16);
            buf.writeUInt16BE(newU16, startingByte);
        }
    });
    return buf;
};
//# sourceMappingURL=base32decode.js.map