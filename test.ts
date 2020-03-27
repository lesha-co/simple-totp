import { base32decode } from "./base32decode";
import { hmacResultToCode, getCounter } from "./util";

{
  const b = base32decode("JBSWY3DP");
  if (b !== null) {
    console.log(b.toString("ascii") === "Hello");
  }
}

{
  const hmacReuslt = Buffer.from(
    "1f8698690e02ca16618550ef7f19da8e945b555a",
    "hex"
  );
  console.log(hmacResultToCode(hmacReuslt, 6) === "872921");
}

{
  const timestamp = 1585296123456;
  console.log(getCounter(timestamp).toString("hex") === "00000000032652c4");
}
