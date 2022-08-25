import { SupportedEncodings } from "../hotp/getKey";
import { ascii_to_u8a } from "./ascii_to_u8a";
import { base32_to_u8a } from "./base32_to_u8a";
import { hex_to_u8a } from "./hex_to_u8a";
import { u8a_to_ascii } from "./u8a_to_ascii";
import { u8a_to_base32 } from "./u8a_to_base32";
import { u8a_to_hex } from "./u8a_to_hex";

export const to_u8a = (
  encoding: SupportedEncodings,
  value: string
): Uint8Array => {
  switch (encoding) {
    case "ascii":
      return ascii_to_u8a(value as string);

    case "hex":
      return hex_to_u8a(value as string);

    case "base32":
      return base32_to_u8a(value as string);
  }
};
export const from_u8a = (
  data: Uint8Array,
  encoding: SupportedEncodings
): string => {
  switch (encoding) {
    case "ascii":
      return u8a_to_ascii(data);
    case "hex":
      return u8a_to_hex(data);
    case "base32":
      return u8a_to_base32(data);
  }
};

export const convert = (
  from: SupportedEncodings | "raw",
  to: SupportedEncodings | "raw",
  value: string | Uint8Array
) => {
  let u8a: Uint8Array;
  switch (from) {
    case "raw":
      u8a = value as Uint8Array;
      break;
    default:
      u8a = to_u8a(from, value as string);
  }
  switch (to) {
    case "raw":
      return u8a;
    default:
      return from_u8a(u8a, to);
  }
};
