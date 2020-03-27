/// <reference types="node" />
export declare const getTOTP: (seed: string | Buffer, encoding: "base32", timestamp?: number, nDigits?: number, T0?: number, Tx?: number) => {
    totp: string;
    remainingSeconds: number;
};
