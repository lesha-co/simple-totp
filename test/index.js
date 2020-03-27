const { base32decode } = require("../dist/lib/base32decode");
var expect = require("chai").expect;
const { hmacResultToCode, getCounter } = require("../dist/lib/util");

describe("EasyTOTP", () => {
  it("should correctly decode Base32 seed", () => {
    const b = base32decode("JBSWY3DP").toString("ascii");
    expect(b).to.equal("Hello");
  });

  it("should generate correct OTP from given HMAC", () => {
    const hmacReuslt = Buffer.from(
      "1f8698690e02ca16618550ef7f19da8e945b555a",
      "hex"
    );
    const otp = hmacResultToCode(hmacReuslt, 6);
    expect(otp).to.equal("872921");
  });

  it("should generate correct counter message from timestamp", () => {
    const timestamp = 1585296123456;
    const counter = getCounter(timestamp).toString("hex");
    expect(counter).to.equal("00000000032652c4");
  });
});
