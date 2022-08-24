/// <reference types="node" />
/**
 * Calculate a counter value
 * @param timestamp current UNIX timestamp in milliseconds
 * @param T0 Epoch, i.e. which timestamp is considered start of the counting
 * (use `0` unless otherwise specified)
 * @param Tx Duration of each period in milliseconds (usually `30000`)
 * @returns
 */
export declare const getCounter: (timestamp: number, T0: number, Tx: number) => {
    counterBuffer: Buffer;
    remainingMs: number;
};
