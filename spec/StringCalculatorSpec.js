const StringCalculator = require("../src/StringCalculator")

describe("StringCalculator", function () {
    var comma = ","
    var stringCalculator

    context("given decimal string calculator", function () {
        beforeEach(function () {
            stringCalculator = new StringCalculator(10, comma, "\n")
        })

        it("can add numbers", function () {
            expect(stringCalculator.add("")).toEqual(0)
        })

        it("can add one number", function () {
            expect(stringCalculator.add("1")).toEqual(1)
        })

        it("can add one different number", function () {
            expect(stringCalculator.add("2")).toEqual(2)
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

        it("can add numbers separated by the newline and comma", function() {
            expect(stringCalculator.add("1\n2,3")).toEqual(6)
        })

        it("can add numbers separated by the comma and newline", function() {
            expect(stringCalculator.add("1,2\n3")).toEqual(6)
        })

        it("can add numbers separated by the newline only", function () {
            expect(stringCalculator.add("1\n2")).toEqual(3)
        })

        it("can add numbers with custom delimiter", function () {
            expect(stringCalculator.add("//;\n1;2")).toEqual(3)
        })

        it("can add other numbers with custom delimiter", function () {
            expect(stringCalculator.add("//;\n2;2")).toEqual(4)
        })

        it("can add numbers with other delimiter", function () {
            expect(stringCalculator.add("//.\n2.2")).toEqual(4)
        })
    })

    context("given binary string calculator", function () {
        beforeEach(function () {
            stringCalculator = new StringCalculator(2, comma)
        })

        it("can add binary number", function () {
            expect(stringCalculator.add("101")).toEqual(5)
        })
    })
})
