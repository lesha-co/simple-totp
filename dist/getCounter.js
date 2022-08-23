"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCounter = (timestamp, T0, Tx) => {
    const adjustedTimestamp = timestamp - T0;
    const remainingMs = Tx - (adjustedTimestamp % Tx);
    const counter = Math.floor(adjustedTimestamp / Tx);
    const counterBuffer = Buffer.alloc(8, 0);
    // TODO: use writeBigInt64BE(counter, 0) (requires node v12.something)
    // This can wait until 2038 when 64bit time stamps become necessity
    counterBuffer.writeUInt32BE(counter, 4);
    return { counterBuffer, remainingMs };
};
//# sourceMappingURL=getCounter.js.map