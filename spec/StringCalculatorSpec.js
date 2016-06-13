describe("StringCalculator", function() {
  it("can add numbers", function() {
    var stringCalculator = new StringCalculator
    stringCalculator.add("")
    expect(stringCalculator.add("")).toEqual(0)
  })
})
