const media = require("../src/index")

describe("index.js",() => {
    it("deve retornar a média de dois numeros", ()=> {
        expect(media(2,2)).toBe(2)
    })
})