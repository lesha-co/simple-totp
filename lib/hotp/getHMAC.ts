import crypto from "crypto";
/**
 * Quick shortcut to creating HMACs
 * @param secret Secret key
 * @param message Message to hash
 * @returns HMAC of your message
 */
export const getHMAC = (
  secret: Uint8Array,
  message: Uint8Array
): Uint8Array => {
  const buf = crypto.createHmac("sha1", secret).update(message).digest();
  const u8a = new Uint8Array(buf);
  return u8a;
};
