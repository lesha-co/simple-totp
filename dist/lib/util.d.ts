/// <reference types="node" />
export declare const hmacResultToCode: (hmac: Buffer, nDigits: number) => string;
export declare const getCounter: (timestamp?: number | undefined) => Buffer;
export declare const totp: (secret: Buffer, nDigits?: number) => string;
