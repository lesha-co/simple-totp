/// <reference types="node" />
/**
 * Full implementation of HMAC-based one-time password algorighm
 * @param secretKey secret key in form of a Buffer or a string
 * @param timestamp
 * @param encoding encoding of a secret key in case it's a string
 * @param nDigits length of an OTP
 * @param T0 Epoch of a counter
 * @param Tx Period of a counter
 * @returns
 */
export declare const getTOTP: (secretKey: string | Buffer, encoding?: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | "base32" | undefined, timestamp?: number, nDigits?: number, T0?: number, Tx?: number) => {
    totp: string;
    remainingMs: number;
};
