const sumAllValidMuls = require("../code/3-mull-it-over.js")

describe("sumAllValidMuls", () => {
    describe("Without conditionals", () => {
        test("Returns a number", () => {
            const input = "mul(4,2)"
            const output = sumAllValidMuls(input)
            expect(typeof output).toBe("number")
        })
        test("Returns the result of the multiplication when given a valid mul instruction", () => {
            const input = "mul(4,2)"
            const output = sumAllValidMuls(input)
            expect(output).toBe(8)
        })
        test("Sums the result of each mul instruction when the instruction string consists of multiple mul instructions", () => {
            const input = "mul(4,2)mul(5,3)"
            const output = sumAllValidMuls(input)
            expect(output).toBe(23)
        })
        test("Skips over any invalid instructions", () => {
            const input = "mul(4,2)&^&$mul(5,3)ggmul(10,2)"
            const output = sumAllValidMuls(input)
            expect(output).toBe(43)
        })
        test("Skips over any invalid instructions that might resemble a mul instruction", () => {
            const input = "gfremul(3,2)6temul(4,2]gfd_mul(10,2)&5mul6,4ggfmul(2,2)"
            const output = sumAllValidMuls(input)
            expect(output).toBe(30)
        })
    })
    describe("With conditionals", () => {
        test("When only one do() and one don't() command exists, skip muls accordingly", () => {
            const input = "do()mul(4,2)don't()mul(5,3)"
            const output = sumAllValidMuls(input, true)
            expect(output).toBe(8)
        })
        test("When multiple do() and don't() commands exist, skip muls accordingly", () => {
            const input = "don't()mul(4,2)&^do()&$mul(5,3)don't()ggmul(10,2)"
            const output = sumAllValidMuls(input, true)
            expect(output).toBe(15)
        })
        test("Skips over any invalid instructions that might resemble any instruction", () => {
            const input = "gfredont()mul(3,2)6tedon't()mul(4,2)gfdo[)mul(4,3)do()_mul(10,2)&5mul6,4ggdon't[)fmul(2,2)"
            const output = sumAllValidMuls(input, true)
            expect(output).toBe(30)
        })
    })
})