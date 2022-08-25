[![Build Status](https://travis-ci.org/lesha-co/simple-totp.svg?branch=master)](https://travis-ci.org/lesha-co/simple-totp)
[![Coverage Status](https://coveralls.io/repos/github/lesha-co/simple-totp/badge.svg?branch=master)](https://coveralls.io/github/lesha-co/simple-totp?branch=master)

# Simple TOTP


## Use this library to generate OTP passwords like Google Authenticator
```js
import {getTOTP} from "simple-totp";

const totp = getTOTP("JBSWY3DP", "base32", Date.now(), 6); 
// {
//  totp: "012345",
//  remainingMs: 29995
// }
```

## Also, convert base32 <=> Uint8Array 
Because base32 is used to encode binary data, it uses Uint8Array as a container. There are also several helper functions to convert 
```js
import {convert} from "simple-totp";
const Hello = convert('base32', 'ascii', 'JBSWY3DP')//= 'Hello' 
const JBSWY3DP = convert('ascii', 'base32', 'Hello')//= 'JBSWY3DP' 


```
