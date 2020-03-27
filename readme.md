```
import totp from "../lib";

const secret = process.env.SECRET as string;
const prefix = process.env.PREFIX as string;

console.log(totp(secret, 6, prefix));
```
