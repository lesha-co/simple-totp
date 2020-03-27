"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base32decode_1 = require("../lib/base32decode");
var util_1 = require("../lib/util");
{
    var b = base32decode_1.base32decode("JBSWY3DP");
    if (b !== null) {
        console.log(b.toString("ascii") === "Hello");
    }
}
{
    var hmacReuslt = Buffer.from("1f8698690e02ca16618550ef7f19da8e945b555a", "hex");
    console.log(util_1.hmacResultToCode(hmacReuslt, 6) === "872921");
}
{
    var timestamp = 1585296123456;
    console.log(util_1.getCounter(timestamp).toString("hex") === "00000000032652c4");
}
//# sourceMappingURL=index.js.map