import { base32_to_u8a, hex_to_u8a, ascii_to_u8a } from "../converters";

export type SupportedEncodings = "hex" | "base32" | "ascii";

/**
 * creates a Uint8Array with your secret key to use in HMAC. You don't need
 * this function if your secret key is already a Uint8Array.
 * @param input your secret key, in form of a Uint8Array or a string (strings need
 * to specify encoding)
 * @param encoding if your secret key is a string, specify encoding.
 * @returns your secret key
 */
export const getKey = (
  input: Uint8Array | string,
  encoding?: SupportedEncodings
): Uint8Array => {
  if (input instanceof Uint8Array) return input;
  if (encoding === undefined) {
    throw new Error("Encoding should be provided for string inputs");
  }
  switch (encoding) {
    case "ascii":
      return ascii_to_u8a(input);
    case "base32":
      return base32_to_u8a(input);
    case "hex":
      return hex_to_u8a(input);
  }
};
