import { BASE32_ALPHABET, BASE32_PADDING } from "./alphabet";

const shiftNumber = (n: number, shift: number) => {
  if (shift == 0) return n;
  if (shift < 0) return n >> Math.abs(shift);
  if (shift > 0) return n << shift;
  throw new Error("what");
};

const writeBits = (
  buf: Uint8Array,
  beginAtBit: number,
  nBits: number,
  value: number
) => {
  // consider third codepoint:
  // AAAAAAAA BBBBBBBB.CCCCCCCC  bytes
  // 00000111 11222223.33334444  codepoints
  // ******** **OOOOO*.********  third character will have these bits to it
  // -------- ->      .          bitOffset = 2x5= 10
  //          ->      .          offsetInByte = 10%8= 2
  //                 <.          shift = 3-offsetInByte
  // consider 4th codepoint
  // AAAAAAAA BBBBBBBB.CCCCCCCC  bytes
  // 00000111 11222223.33334444  codepoints
  // ******** *******O.OOOO****  fourth character will have these bits to it
  // -------- ------> .          bitOffset = 3x5= 15
  //          ------> .          offsetInByte = 15%8= 7
  //                  .    <---  shift = 3-offsetInByte = -4 (-4 + 8 = 4 in next byte)

  if (buf.length * 8 - (beginAtBit + nBits) < 0) {
    throw new Error(
      `Attempt to write past array end: Array length: ${
        buf.length * 8
      } bits, writing ${nBits} at ${beginAtBit}`
    );
  }

  value &= 2 ** nBits - 1;
  const startingByte = Math.floor(beginAtBit / 8);
  const offsetInStartingByte = beginAtBit % 8;
  const shift = 8 - nBits - offsetInStartingByte;

  buf[startingByte] = (buf[startingByte] | shiftNumber(value, shift)) & 0xff;
  if (shift < 0) {
    // next byte
    const offsetInNextByte = offsetInStartingByte - 8;
    const shift = 8 - nBits - offsetInNextByte;
    buf[startingByte + 1] =
      (buf[startingByte + 1] | shiftNumber(value, shift)) & 0xff;
  }
};

export const base32_to_u8a = (b32string: string): Uint8Array => {
  if (b32string.length % 8)
    throw new Error("input should have length of multiple of 8");

  if (b32string.includes(BASE32_PADDING)) {
    b32string = b32string.slice(0, b32string.indexOf(BASE32_PADDING));
  }
  const codepoints = Array.from(b32string).map((x) =>
    BASE32_ALPHABET.indexOf(x)
  );
  if (codepoints.some((x) => x === -1))
    throw new Error("Illegal characters found in input");

  const buf = new Uint8Array((b32string.length * 5) / 8);

  let bitOffset = 0;

  for (const codepoint of codepoints) {
    const realBits = Math.min(5, buf.length * 8 - bitOffset);
    let realValue = codepoint;
    if (realBits < 5) {
      realValue >>= 5 - realBits;
    }

    writeBits(buf, bitOffset, realBits, realValue);
    bitOffset += 5;
  }

  return buf;
};
