const getTotalOfValidMiddlePages = require("../code/5-print-queue.js")

describe("getTotalOfValidMiddlePages", () => {
    test("Returns a number", () => {
        const orderingRules = [[1,2]]
        const pageNumbers = [[1,2,3]]
        expect(typeof getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe("number")
    })
    test("Returns the middle number of a page number list that is valid given a single ordering rule (the first number appears before the second)", () => {
        const orderingRules = [[1,2]]
        const pageNumbers = [[1,2,3]]
        expect(getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe(2)
    })
    test("Returns 0 when there is only one page number list and it is not valid (the second number appears before the first)", () => {
        const orderingRules = [[2,1]]
        const pageNumbers = [[1,2,3]]
        expect(getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe(0)
    })
    test("Returns the middle number when there is only one page number list and only the first number is present", () => {
        const orderingRules = [[2,1]]
        const pageNumbers = [[2,3,4]]
        expect(getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe(3)
    })
    test("Returns the middle number when there is only one page number list and only the second number is present", () => {
        const orderingRules = [[2,1]]
        const pageNumbers = [[3,1,4]]
        expect(getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe(1)
    })
    test("Returns the total of all middle numbers of valid lists when there is only one ordering rule but many lists of page numbers", () => {
        const orderingRules = [[2,1]]
        const pageNumbers = [[2,1,3], [2,3,1,4,5], [1,2,3], [2,3,4], [1,3,4]]
        expect(getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe(8)
    })
    test("Returns the total of all middle numbers of valid lists when there are multiple ordering rules and many page number lists", () => {
        const orderingRules = [
            [47,53],
            [97,13],
            [97,61],
            [97,47],
            [75,29],
            [61,13],
            [75,53],
            [29,13],
            [97,29],
            [53,29],
            [61,53],
            [97,53],
            [61,29],
            [47,13],
            [75,47],
            [97,75],
            [47,61],
            [75,61],
            [47,29],
            [75,13],
            [53,13]
        ]
        const pageNumbers = [
            [75,47,61,53,29],
            [97,61,53,29,13],
            [75,29,13],
            [75,97,47,61,53],
            [61,13,29],
            [97,13,75,29,47]
        ]
        expect(getTotalOfValidMiddlePages(orderingRules, pageNumbers)).toBe(143)
    })
})