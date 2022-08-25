export const u8a_to_hex = (u8a: Uint8Array) => {
  let string = "";

  for (const byte of u8a) {
    string += byte.toString(16).padStart(2, "0");
  }
  return string;
};
