export const getCounter = (
  timestamp: number,
  T0: number,
  Tx: number
): { counterBuffer: Buffer; remainingSeconds: number } => {
  const adjustedTimestamp = timestamp - T0;
  const remainingSeconds = Tx - (adjustedTimestamp % Tx);
  const counter = Math.floor(adjustedTimestamp / Tx);
  const counterBuffer = Buffer.alloc(8, 0);
  // TODO: use writeBigInt64BE(counter, 0) (requires node v12.something)
  // This can wait until 2038 when 64bit time stamps become necessity
  counterBuffer.writeUInt32BE(counter, 4);
  return { counterBuffer, remainingSeconds };
};
