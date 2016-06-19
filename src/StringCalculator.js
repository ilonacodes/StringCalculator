function StringCalculator(radix, delimiter, secondDelimiter) {
    this.radix = radix
    this.delimiter = delimiter
    this.secondDelimiter = secondDelimiter
}

StringCalculator.Zero = 0

StringCalculator.prototype.add = function (numbers) {
    if (isEmpty(numbers)) return StringCalculator.Zero

    if (includesCustomDelimiter(numbers)) {
        this.delimiter = extractCustomDelimiterFrom(numbers)
        return this.add(extractNumbers(numbers))
    }

    if (this.includesDelimiter(numbers)) {
        var splitted = this.splitByDelimiter(numbers)
        var first = splitted[0]
        var second = splitted[1]

        return this.add(first) + this.add(second)
    }

    return this.parseInt(numbers)
}

function extractNumbers(numbers) {
    return numbers.substring(4);
}

function extractCustomDelimiterFrom(numbers) {
    return numbers[2];
}

function includesCustomDelimiter(numbers) {
    return numbers.substring(0, 2) == "//";
}

StringCalculator.prototype.parseInt = function (string) {
    return parseInt(string, this.radix)
}

StringCalculator.prototype.includesDelimiter = function (numbers) {
    return numbers.includes(this.delimiter) ||
            numbers.includes(this.secondDelimiter)
}

StringCalculator.prototype.splitByDelimiter = function (numbers) {
    return split(numbers, this.secondDelimiter) ||
            split(numbers, this.delimiter)
}

function isEmpty(numbers) {
    return numbers == ""
}

function split(string, delimiter) {
    var index = string.indexOf(delimiter)
    if (index < 0) return null
    return [
        string.substring(0, index),
        string.substring(index + 1)
    ]
}


if (typeof module != "undefined") {
    module.exports = StringCalculator
}