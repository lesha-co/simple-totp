/**
 * Calculate a counter value
 * @param timestamp current UNIX timestamp in milliseconds
 * @param T0 Epoch, i.e. which timestamp is considered start of the counting
 * (use `0` unless otherwise specified)
 * @param Tx Duration of each period in milliseconds (usually `30000`)
 * @returns
 */
import { getCounter } from "./getCounter";
export const getCounterBuffer = (
  timestamp: number,
  T0: number,
  Tx: number
): { counterBuffer: Buffer; remainingMs: number } => {
  const { counter, remainingMs } = getCounter(timestamp, T0, Tx);
  const counterBuffer = Buffer.alloc(8, 0);
  // TODO: use writeBigInt64BE(counter, 0) (requires node v12.something)
  // This can wait until 2038 when 64bit time stamps become necessity
  counterBuffer.writeUInt32BE(counter, 4);
  return { counterBuffer, remainingMs };
};
