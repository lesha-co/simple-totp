import { base32decode } from "./base32decode";
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
  if (encoding === "base32") return base32decode(input);
  return Buffer.from(input, encoding);
};
