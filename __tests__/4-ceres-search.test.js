const findXmasInWordsearch = require("../code/4-ceres-search.js")

describe("findXmasInWordsearch", () => {
    test("Returns a number", () => {
        const input = ["XMAS"]
        const output = findXmasInWordsearch(input)
        expect(typeof output).toBe("number")
    })
    test("Returns 1 when given a single row consisting of 'XMAS'", () => {
        const input = ["XMAS"]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(1)
    })
    test("Returns 1 when given a single row consisting of 'XMAS' reversed ('SAMX')", () => {
        const input = ["SAMX"]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(1)
    })
    test("Returns 1 when given a single row consisting of 'XMAS' with other letters included", () => {
        const input = ["FFDSXMASFGF"]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(1)
    })
    test("Returns the total number of appearances of 'XMAS' (reversed or not) when given a single row", () => {
        const input = ["FFDSXMASFGFGDXMASGJFNSAMXF"]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(3)
    })
    test("Returns 1 when a given column contains 'XMAS'", () => {
        const input = [
            "AXBC",
            "BMCD",
            "CADE",
            "DSEF"
        ]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(1)
    })
    
})