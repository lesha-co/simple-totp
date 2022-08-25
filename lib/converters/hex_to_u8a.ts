export const hex_to_u8a = (str: string): Uint8Array => {
  if (str.length % 2) throw new Error("odd string length");
  const result = new Uint8Array(str.length / 2);

  for (let index = 0; index < result.length; index++) {
    const hex = str.slice(index * 2, index * 2 + 2);
    result[index] = parseInt(hex, 16);
  }
  return result;
};
