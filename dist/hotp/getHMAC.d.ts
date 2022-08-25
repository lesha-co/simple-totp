/**
 * Quick shortcut to creating HMACs
 * @param secret Secret key
 * @param message Message to hash
 * @returns HMAC of your message
 */
export declare const getHMAC: (secret: Uint8Array, message: Uint8Array) => Uint8Array;
