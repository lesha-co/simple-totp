import { decode } from "../base32/decode";
/**
 * creates a Buffer with your secret key to use in HMAC. You don't need this function if your secret key is already a Buffer.
 * @param input your secret key, in form of a Buffer or a string (strings need to specify encoding)
 * @param encoding if your secret key is a string, specify encoding.
 * @returns your secret key
 */
export const getKey = (
  input: Buffer | string,
  encoding?: BufferEncoding | "base32"
): Buffer => {
  if (Buffer.isBuffer(input)) return input;
  if (encoding === undefined) {
    throw new Error(
      "Encoding should be provided for string inputs (any Buffer encoding or 'base32')"
    );
  }
  if (encoding === "base32") return decode(input);
  return Buffer.from(input, encoding);
};
