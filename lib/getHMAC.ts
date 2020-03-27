import crypto from "crypto";

export const getHMAC = (secret: Buffer, message: Buffer): Buffer =>
  crypto
    .createHmac("sha1", secret)
    .update(message)
    .digest();
