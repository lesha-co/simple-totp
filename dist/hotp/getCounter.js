"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCounter = void 0;
/**
 * Calculate a counter value
 */
const getCounter = (timestamp, T0, Tx) => {
    const adjustedTimestamp = timestamp - T0;
    const remainingMs = Tx - (adjustedTimestamp % Tx);
    const counter = Math.floor(adjustedTimestamp / Tx);
    return { counter, remainingMs };
};
exports.getCounter = getCounter;
//# sourceMappingURL=getCounter.js.map