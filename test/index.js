const { base32decode } = require("../dist/base32decode");
const { hmacResultToCode, getCounter, totp } = require("../dist/util");

const expect = require("chai").expect;

describe("EasyTOTP", () => {
  describe("Base32 decoder", () => {
    it("should correctly decode Base32 seed", () => {
      const b = base32decode("JBSWY3DP").toString("ascii");
      expect(b).to.equal("Hello");
    });
    describe("invalid input - should return null", () => {
      it("if input length is not multiple of 8", () => {
        const b = base32decode("123456789");
        expect(b).to.equal(null);
      });
      it("if input has characters outside alphabet", () => {
        const b = base32decode("JBSWY3!P");
        expect(b).to.equal(null);
      });
    });
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
  it("should generate an otp, 6 digits default", () => {
    expect(totp("JBSWY3DP")).to.have.length(6);
  });
  it("should generate an otp, 8 digits", () => {
    expect(totp("JBSWY3DP", 8)).to.have.length(8);
  });
});
