import { base32decode } from "./base32decode";
import { totp } from "./util";

export default (base32key: string, nDigits = 6, prefix = "") => {
  const secret = base32decode(base32key);
  if (!secret) throw new Error("secret is invalid");
  return prefix + totp(secret, nDigits);
};
