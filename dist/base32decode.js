"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const padding = "=";
exports.base32decode = (b32string) => {
    if (b32string.length % 8)
        throw new Error("input should have length of multiple of 8");
    const codepoints = Array.from(b32string).map((x) => alphabet.indexOf(x));
    if (codepoints.some((x) => x === -1))
        throw new Error("Illegal characters found in input");
    const buf = Buffer.alloc((b32string.length * 5) / 8);
    codepoints.forEach((code, index, array) => {
        // 000000001111111122222222  bytes
        // **********OOOOO*********  third character will have these bits to it
        // --------->                bitOffset = 2x5= 10
        //         ->                offsetInByte = 10%8= 2
        //          <---------------> u16
        //                 <-------- shiftInU16 = 9
        const bitOffset = index * 5;
        // we need to know which byte corresponds to given bit offset
        const startingByte = Math.floor(bitOffset / 8);
        // we need to know how far we are into this byte
        const offsetInByte = bitOffset % 8;
        // we will work with u16 because our 5 bits can cross byte border and it's easier to just
        // assume that we're working with u16s
        const shiftInU16 = 16 - 5 - offsetInByte;
        if (index === array.length - 1) {
            // in case of last character startingByte would be the last one and we can't read u16
            // anymore, in that case we will work with u8
            const u8 = buf.readUInt8(startingByte);
            const newU8 = u8 | code;
            buf.writeUInt8(newU8, startingByte);
        }
        else {
            const u16 = buf.readUInt16BE(startingByte);
            const newU16 = u16 | (code << shiftInU16);
            buf.writeUInt16BE(newU16, startingByte);
        }
    });
    return buf;
};
exports.buf_to_base32 = (buf) => {
    let _buf = buf.slice();
    let current = 0;
    let currentBitLength = 0;
    let base32 = "";
    const CONSUME = 8;
    const FLUSH = 5;
    const consumeFromSource = () => {
        current = (current << CONSUME) | _buf[0];
        currentBitLength += CONSUME;
        _buf = _buf.slice(1);
    };
    const flush = () => {
        const leading5bits = current >> (currentBitLength - FLUSH);
        current -= leading5bits << (currentBitLength - FLUSH);
        currentBitLength -= FLUSH;
        base32 += alphabet[leading5bits];
    };
    const align = () => {
        current = current << (FLUSH - currentBitLength);
        currentBitLength = FLUSH;
    };
    const pad = () => {
        const length = Math.ceil(base32.length / 8) * 8;
        base32 = base32.padEnd(length, padding);
    };
    while (_buf.length) {
        while (currentBitLength < 5)
            consumeFromSource();
        while (currentBitLength >= 5)
            flush();
    }
    if (current) {
        align();
        flush();
        pad();
    }
    return base32;
};
//# sourceMappingURL=base32decode.js.map