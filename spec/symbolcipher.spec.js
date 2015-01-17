/* tests for symbolcipher */

var symbolCipher = require("../symbolcipher.js");
console.log()
describe("Symbol Cipher Tests", function () {
	var encodedChars = "å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥Ω¡™£¢∞§¶•ªº`–≠“‘«÷…æ≤≥ Ú¿";
	var plainChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`-=[]\\/;',. :?";

	it("should encode all characters correctly", function(done) {
		expect(symbolCipher.encipher(plainChars)).toEqual(encodedChars);
		done();
	});

	it("should decode all characters correctly", function(done) {
		expect(symbolCipher.decipher(encodedChars)).toEqual(plainChars);
		done();
	});
});
