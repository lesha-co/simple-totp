[![Build Status](https://travis-ci.org/lesha-co/simple-totp.svg?branch=master)](https://travis-ci.org/lesha-co/simple-totp)
[![Coverage Status](https://coveralls.io/repos/github/lesha-co/simple-totp/badge.svg?branch=master)](https://coveralls.io/github/lesha-co/simple-totp?branch=master)

# Simple TOTP

```
import totp from "../lib";

const secret = process.env.SECRET as string;
const prefix = process.env.PREFIX as string;

console.log(totp(secret, 6, prefix));
```
