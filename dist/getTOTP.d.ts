/// <reference types="node" />
export declare const getTOTP: (seed: string | Buffer, encoding: "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "latin1" | "binary" | "hex" | "base32", timestamp?: number, nDigits?: number, T0?: number, Tx?: number) => {
    totp: string;
    remainingMs: number;
};
