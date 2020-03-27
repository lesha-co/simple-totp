import crypto from "crypto";

export const hmacResultToCode = (hmac: Buffer, nDigits: number): string => {
  const offset = hmac.readUInt8(hmac.length - 1) & 0xf;
  const fourBytes = hmac.readUInt32BE(offset) & 0x7fffffff;
  return (fourBytes % 10 ** nDigits).toString(10).padStart(nDigits, "0");
};

export const getCounter = (timestamp?: number): Buffer => {
  const date = timestamp || Date.now();
  const counter = Math.floor(date / 30000);
  const counterBuffer = Buffer.alloc(8, 0);
  // TODO: since node v12 you can use writeBigInt64BE(counter, 0)
  counterBuffer.writeUInt32BE(counter, 4);
  return counterBuffer;
};

export const totp = (secret: Buffer, nDigits = 6): string => {
  const hmac = crypto.createHmac("sha1", secret);
  hmac.update(getCounter());

  return hmacResultToCode(hmac.digest(), nDigits);
};
