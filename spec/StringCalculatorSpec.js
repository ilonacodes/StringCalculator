describe("StringCalculator", function() {
  it("can add numbers", function() {
    var stringCalculator = new StringCalculator
    expect(stringCalculator.add("")).toEqual(0)
  })

  it("can add one number", function() {
    var stringCalculator = new StringCalculator
    expect(stringCalculator.add("1")).toEqual(1)
  })
})
