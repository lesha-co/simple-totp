import { base32decode } from "./base32decode";
import { totp } from "./util";

const secret = base32decode(process.env.SECRET as string);
const prefix = process.env.PREFIX as string;
if (!secret) throw new Error();

console.log(prefix + totp(secret));
