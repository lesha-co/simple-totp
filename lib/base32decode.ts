const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
const padding = "=";

export const base32decode = (b32string: string): Buffer | null => {
  if (b32string.length % 8) return null;

  const codepoints = Array.from(b32string).map(x => alphabet.indexOf(x));
  if (codepoints.some(x => x === -1)) return null;

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
    } else {
      const u16 = buf.readUInt16BE(startingByte);
      const newU16 = u16 | (code << shiftInU16);
      buf.writeUInt16BE(newU16, startingByte);
    }
  });
  return buf;
};
