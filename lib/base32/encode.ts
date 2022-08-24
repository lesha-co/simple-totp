import { alphabet, padding } from "./alphabet";

export const encode = (buf: Buffer): string => {
  let _buf = buf.slice();
  let current: number = 0;
  let currentBitLength: number = 0;
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
    while (currentBitLength < 5) consumeFromSource();
    while (currentBitLength >= 5) flush();
  }
  if (currentBitLength > 0) {
    align();
    flush();
    pad();
  }
  return base32;
};
