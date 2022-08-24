/// <reference types="node" />
/**
 * creates a Buffer with your secret key to use in HMAC. You don't need this function if your secret key is already a Buffer.
 * @param input your secret key, in form of a Buffer or a string (strings need to specify encoding)
 * @param encoding if your secret key is a string, specify encoding.
 * @returns your secret key
 */
export declare const getKey: (input: string | Buffer, encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | "base32" | undefined) => Buffer;
