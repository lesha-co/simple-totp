import crypto from "crypto";
/**
 * Quick shortcut to creating HMACs
 * @param secret Secret key
 * @param message Message to hash
 * @returns HMAC of your message
 */
export const getHMAC = (secret: Buffer, message: Buffer): Buffer =>
  crypto.createHmac("sha1", secret).update(message).digest();
