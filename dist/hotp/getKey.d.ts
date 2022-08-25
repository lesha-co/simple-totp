export declare type SupportedEncodings = "hex" | "base32" | "ascii";
/**
 * creates a Uint8Array with your secret key to use in HMAC. You don't need
 * this function if your secret key is already a Uint8Array.
 * @param input your secret key, in form of a Uint8Array or a string (strings need
 * to specify encoding)
 * @param encoding if your secret key is a string, specify encoding.
 * @returns your secret key
 */
export declare const getKey: (input: Uint8Array | string, encoding?: SupportedEncodings) => Uint8Array;
