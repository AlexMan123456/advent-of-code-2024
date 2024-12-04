const {findXmasInWordsearch, findX_Mas} = require("../code/4-ceres-search.js")

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
    test("Returns 1 when a rightwards diagonal contains 'XMAS'", () => {
        const input = [
            "XABC",
            "BMCD",
            "CDAE",
            "DEFS"
        ]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(1)
    })
    test("Returns 1 when a leftwards diagonal contains 'XMAS'", () => {
        const input = [
            "ABCX",
            "BCMD",
            "CADE",
            "SDEF"
        ]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(1)
    })
    test("Searches for all occurences of 'XMAS' in a given wordsearch", () => {
        const input = [
            "ABXMASCD",
            "EFMXGXHI",
            "JKALMNOP",
            "QRSATAUV",
            "WXSYZASB"
        ]
        const output = findXmasInWordsearch(input)
        expect(output).toBe(4)
    })
})

describe("FindX_Mas", () => {
    test("Returns 1 when X-Mas only appears once", () => {
        const input = [
            "MAM",
            "BAC",
            "SDS"
        ]
        const output = findX_Mas(input)
        expect(output).toBe(1)
    })
    test("Returns 1 when X-Mas appears backwards from left to right", () => {
        const input = [
            "SAM",
            "BAC",
            "SDM"
        ]
        const output = findX_Mas(input)
        expect(output).toBe(1)
    })
    test("Returns 1 when X-Mas appears backwards from right to left", () => {
        const input = [
            "MAS",
            "BAC",
            "MDS"
        ]
        const output = findX_Mas(input)
        expect(output).toBe(1)
    })
    test("Returns the total number of X-Masses when passed multiple", () => {
        const input = [
            "MDSSFMHS",
            "VANGADAS",
            "MRSSTMGS"
        ]
        const output = findX_Mas(input)
        expect(output).toBe(3)
    })
})