const {
  base32decode,
  getCode,
  getCounter,
  getTOTP,
  getKey,
} = require("../dist");

const expect = require("chai").expect;

describe("EasyTOTP", () => {
  describe("Base32 decoder", () => {
    it("should correctly decode Base32 seed", () => {
      const b = base32decode("JBSWY3DP").toString("ascii");
      expect(b).to.equal("Hello");
    });
    describe("invalid input - should return null", () => {
      it("if input length is not multiple of 8", () => {
        expect(() => base32decode("123456789")).to.throw();
      });
      it("if input has characters outside alphabet", () => {
        expect(() => base32decode("JBSWY3!P")).to.throw();
      });
    });
  });

  describe("getCode", () => {
    it("should generate correct code with given HMAC", () => {
      const hmacReuslt = Buffer.from(
        "1f8698690e02ca16618550ef7f19da8e945b555a",
        "hex"
      );
      const otp = getCode(hmacReuslt, 6);
      expect(otp).to.equal("872921");
    });
  });

  describe("getCounter", () => {
    it("should generate correct counter message from timestamp", () => {
      const timestamp = 1585296123456;
      const { counterBuffer, remainingMs } = getCounter(timestamp, 0, 30000);
      expect(counterBuffer.toString("hex")).to.equal("00000000032652c4");
    });
  });
  describe("getTOTP", () => {
    it("should generate an otp, 6 digits default", () => {
      const totp = getTOTP("JBSWY3DP", "base32");
      expect(totp.totp).to.have.length(6);
    });
    it("should generate an otp, 8 digits", () => {
      expect(getTOTP("JBSWY3DP", "base32", undefined, 8).totp).to.have.length(
        8
      );
    });
  });

  describe("getKey", () => {
    it("should return input if input is Buffer", () => {
      const buf = Buffer.from("deadbeef", "hex");
      expect(getKey(buf)).to.equal(buf);
    });
    it("should throw if encoding is not provided", () => {
      expect(() => getKey("deadbeef")).to.throw();
    });
    it("should construct a Buffer", () => {
      expect(getKey("deadbeef", "hex") instanceof Buffer).to.equal(true);
    });
  });
});
