/**
 * Calculate a counter value
 * @param timestamp current UNIX timestamp in milliseconds
 * @param T0 Epoch, i.e. which timestamp is considered start of the counting
 * (use `0` unless otherwise specified)
 * @param Tx Duration of each period in milliseconds (usually `30000`)
 * @returns
 */
import { getCounter } from "./getCounter";
export const getCounterValue = (
  timestamp: number,
  T0: number,
  Tx: number
): { counterValue: Uint8Array; remainingMs: number } => {
  const { counter, remainingMs } = getCounter(timestamp, T0, Tx);
  const counterValue = new Uint8Array(8);
  // TODO: use writeBigInt64BE(counter, 0) (requires node v12.something)
  // This can wait until 2038 when 64bit time stamps become necessity
  const counterBytes = new Uint8Array(4).map(
    (_, i) => (counter >> ((3 - i) * 8)) & 0xff
  );
  for (let index = 0; index < 4; index++) {
    counterValue[4 + index] = counterBytes[index];
  }
  return { counterValue, remainingMs };
};
