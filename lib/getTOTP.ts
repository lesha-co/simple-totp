import { getCode, getCounter, getHMAC, getKey } from ".";

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
export const getTOTP = (
  secretKey: string | Buffer,
  encoding: BufferEncoding | "base32" | undefined = undefined,
  timestamp: number = Date.now(),
  nDigits: number = 6,
  T0: number = 0,
  Tx: number = 30000
): { totp: string; remainingMs: number } => {
  const { counterBuffer, remainingMs } = getCounter(timestamp, T0, Tx);
  const totp = getCode(
    getHMAC(getKey(secretKey, encoding), counterBuffer),
    nDigits
  );
  return { totp, remainingMs };
};
