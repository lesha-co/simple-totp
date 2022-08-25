import { SupportedEncodings } from "../hotp/getKey";
export declare const to_u8a: (encoding: SupportedEncodings, value: string) => Uint8Array;
export declare const from_u8a: (data: Uint8Array, encoding: SupportedEncodings) => string;
export declare const convert: (from: SupportedEncodings | "raw", to: SupportedEncodings | "raw", value: string | Uint8Array) => string | Uint8Array;
