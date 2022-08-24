/**
 * Calculate a counter value
 */
export const getCounter = (
  timestamp: number,
  T0: number,
  Tx: number
): { counter: number; remainingMs: number } => {
  const adjustedTimestamp = timestamp - T0;
  const remainingMs = Tx - (adjustedTimestamp % Tx);
  const counter = Math.floor(adjustedTimestamp / Tx);

  return { counter, remainingMs };
};
