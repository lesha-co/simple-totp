"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculate a counter value
 */
exports.getCounter = (timestamp, T0, Tx) => {
    const adjustedTimestamp = timestamp - T0;
    const remainingMs = Tx - (adjustedTimestamp % Tx);
    const counter = Math.floor(adjustedTimestamp / Tx);
    return { counter, remainingMs };
};
//# sourceMappingURL=getCounter.js.map