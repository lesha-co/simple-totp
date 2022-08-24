const {
  decode,
  getCode,
  getCounter,
  getTOTP,
  getKey,
  encode,
  padding,
} = require("../dist");
const { pairs } = require("./samples");
const expect = require("chai").expect;

describe("Simple TOTP", () => {
  describe("Base32 decoder", () => {
    describe("valid inputs", () => {
      const paddings = pairs.filter((x) => x[1].includes(padding));
      const nopaddings = pairs.filter((x) => !x[1].includes(padding));

      describe("without paddings", () => {
        for (const [ascii, base32] of nopaddings) {
          it(`should correctly decode from Base32 '${base32}'`, () => {
            const b = decode(base32).toString("ascii");
            expect(b).to.equal(ascii);
          });
        }
      });
      describe("with paddings", () => {
        for (const [ascii, base32] of paddings) {
          it(`should correctly decode from Base32 '${base32}'`, () => {
            const b = decode(base32).toString("ascii");
            expect(b).to.equal(ascii);
          });
        }
      });
    });

    describe("invalid inputs", () => {});

    it("should correctly decode Base32 seed", () => {
      const b = decode("JBSWY3DP").toString("ascii");
      expect(b).to.equal("Hello");
    });
    it("should correctly decode Base32 seed with paddings", () => {
      const b = decode("JBSWY3DPEBLW64TMMQ======").toString("ascii");
      expect(b).to.equal("Hello World");
    });
    describe("invalid input - should return null", () => {
      it("if input length is not multiple of 8", () => {
        expect(() => decode("123456789")).to.throw();
      });
      it("if input has characters outside alphabet", () => {
        expect(() => decode("JBSWY3!P")).to.throw();
      });
    });
  });

  describe("Base32 encoder", () => {
    for (const [ascii, base32] of pairs) {
      it(`should correctly encode Base32 from ascii '${ascii}'`, () => {
        const buffer = Buffer.from(ascii, "ascii");
        const b = encode(buffer);
        expect(b).to.equal(base32);
      });
    }
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
