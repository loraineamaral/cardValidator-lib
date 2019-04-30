let chai = require("chai");
let expect = chai.expect;
let cardNumber = require("../lib/index");

describe("cardValidator", () => {
  it("Testa cartão Inválido", () => {
    expect(cardNumber.cardValidator("5292438341928601")).to.equal(false);
  });
  it("Testa cartão Válido", () => {
    expect(cardNumber.cardValidator("5292438341928602")).to.equal(true);
  });
  it("Testa comprimento grande para cartão", () => {
    expect(cardNumber.cardValidator("529243834192860201")).to.equal(false);
  });
  it("Testa comprimento pequeno para cartão", () => {
    expect(cardNumber.cardValidator("52924383419286")).to.equal(false);
  });
  it("Testa se números são todos iguais", () => {
    expect(cardNumber.cardValidator("2222222222222222")).to.equal(false);
  });
  it("Testa se cartão tem letras", () => {
    expect(cardNumber.cardValidator("529243834192860X")).to.equal(false);
  });
});