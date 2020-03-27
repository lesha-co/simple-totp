export const getCode = (hmac: Buffer, nDigits: number): string => {
  const offset = hmac.readUInt8(hmac.length - 1) & 0xf;
  const fourBytes = hmac.readUInt32BE(offset) & 0x7fffffff;
  return (fourBytes % 10 ** nDigits).toString(10).padStart(nDigits, "0");
};
