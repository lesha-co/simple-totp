export const u8a_to_ascii = (u8a: Uint8Array) => {
  let string = "";

  for (const byte of u8a) {
    string += String.fromCharCode(byte);
  }
  return string;
};
