import { getCode } from "./getCode";
import { getCounter } from "./getCounter";
import { getHMAC } from "./getHMAC";
import { getKey } from "./getKey";

export const getTOTP = (
  seed: string | Buffer,
  encoding: "base32",
  timestamp: number = Date.now(),
  nDigits = 6,
  T0 = 0,
  Tx = 30000
): { totp: string; remainingSeconds: number } => {
  const secret = getKey(seed, encoding);
  const { counterBuffer, remainingSeconds } = getCounter(timestamp, T0, Tx);
  const hmac = getHMAC(secret, counterBuffer);
  const totp = getCode(hmac, nDigits);
  return { totp, remainingSeconds };
};
