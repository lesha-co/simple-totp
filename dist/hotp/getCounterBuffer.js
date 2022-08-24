"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculate a counter value
 * @param timestamp current UNIX timestamp in milliseconds
 * @param T0 Epoch, i.e. which timestamp is considered start of the counting
 * (use `0` unless otherwise specified)
 * @param Tx Duration of each period in milliseconds (usually `30000`)
 * @returns
 */
const getCounter_1 = require("./getCounter");
exports.getCounterBuffer = (timestamp, T0, Tx) => {
    const { counter, remainingMs } = getCounter_1.getCounter(timestamp, T0, Tx);
    const counterBuffer = Buffer.alloc(8, 0);
    // TODO: use writeBigInt64BE(counter, 0) (requires node v12.something)
    // This can wait until 2038 when 64bit time stamps become necessity
    counterBuffer.writeUInt32BE(counter, 4);
    return { counterBuffer, remainingMs };
};
//# sourceMappingURL=getCounterBuffer.js.map