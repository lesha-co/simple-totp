import { SupportedEncodings } from "./hotp/getKey";
/**
 * Full implementation of HMAC-based one-time password algorighm
 * @param secretKey secret key in form of a Uint8Array or a string
 * @param timestamp
 * @param encoding encoding of a secret key in case it's a string
 * @param nDigits length of an OTP
 * @param T0 Epoch of a counter
 * @param Tx Period of a counter
 * @returns
 */
export declare const getTOTP: (secretKey: string | Uint8Array, encoding?: SupportedEncodings | undefined, timestamp?: number, nDigits?: number, T0?: number, Tx?: number) => {
    totp: string;
    remainingMs: number;
};
