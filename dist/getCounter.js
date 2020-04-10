"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCounter = function (timestamp, T0, Tx) {
    var adjustedTimestamp = timestamp - T0;
    var remainingMs = Tx - (adjustedTimestamp % Tx);
    var counter = Math.floor(adjustedTimestamp / Tx);
    var counterBuffer = Buffer.alloc(8, 0);
    // TODO: use writeBigInt64BE(counter, 0) (requires node v12.something)
    // This can wait until 2038 when 64bit time stamps become necessity
    counterBuffer.writeUInt32BE(counter, 4);
    return { counterBuffer: counterBuffer, remainingMs: remainingMs };
};
//# sourceMappingURL=getCounter.js.map