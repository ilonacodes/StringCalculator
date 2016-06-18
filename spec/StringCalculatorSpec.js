var StringCalculator = require("../src/StringCalculator")

describe("StringCalculator", function () {
    var comma = ","
    var stringCalculator = new StringCalculator(10, comma)

    it("can add numbers", function () {
        expect(stringCalculator.add("")).toEqual(0)
    })

    it("can add one number", function () {
        expect(stringCalculator.add("1")).toEqual(1)
    })

    it("can add one different number", function () {
        expect(stringCalculator.add("2")).toEqual(2)
    })

    it("can add binary number", function () {
        var binaryStringCalculator = new StringCalculator(2, comma)
        expect(binaryStringCalculator.add("101")).toEqual(5)
    })

    it("can add two numbers", function () {
        expect(stringCalculator.add("1,2")).toEqual(3)
    })

    it("can add two other numbers", function () {
        expect(stringCalculator.add("3,4")).toEqual(7)
    })

    it("can add arbitrary amount of numbers", function () {
        expect(stringCalculator.add("7,3,4,5,8")).toEqual(27)
    })
})
