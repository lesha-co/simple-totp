/// <reference types="node" />
/**
 * Provide human-readable representation of HMAC
 * @param hmac hash to format
 * @param nDigits length of code
 * @returns human-readable code
 */
export declare const getCode: (hmac: Buffer, nDigits: number) => string;
