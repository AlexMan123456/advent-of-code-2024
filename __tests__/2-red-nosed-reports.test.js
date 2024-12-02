const { countSafeReports } = require("../code/2-red-nosed-reports.js")

describe("countSafeReports", () => {
    describe("Task 1: No dampening:", () => {
        test("Returns a number", () => {
            const input = [[1], [2,3]]
            const output = countSafeReports(input)
            expect(typeof output).toBe("number")
        })
        test("Returns 1 when given a safe list", () => {
            expect(countSafeReports([[7,6,4,2,1]])).toBe(1)
            expect(countSafeReports([[1,3,6,7,9]])).toBe(1)
        })
        test("Returns 0 when given a list of numbers that all increase, but two consecutive numbers differ by more than three", () => {
            const input = [[1,2,7,8,9]]
            const output = countSafeReports(input)
            expect(output).toBe(0)
        })
        test("Returns 0 when given a list of numbers that all decrease, but two consecutive numbers differ by more than three", () => {
            const input = [[9,7,6,2,1]]
            const output = countSafeReports(input)
            expect(output).toBe(0)
        })
        test("Returns 0 when two consecutive numbers do not change", () => {
            const input = [[8,6,4,4,1]]
            const output = countSafeReports(input)
            expect(output).toBe(0)
        })
        test("Returns 0 when some consecutive numbers decrease, while others increase", () => {
            const input = [[1,3,2,4,5]]
            const output = countSafeReports(input)
            expect(output).toBe(0)
        })
        test("Counts the total amount of safe reports when given multiple reports", () => {
            const input = [[7,6,4,2,1], [1,2,7,8,9], [9,7,6,2,1], [1,3,2,4,5], [8,6,4,4,1], [1,3,6,7,9]]
            const output = countSafeReports(input)
            expect(output).toBe(2)
        })
        test("Counts the total amount of safe reports when given multiple reports where each report varies in length", () => {
            const input = [[7,6,4,2,1], [1,2,7,8,9,11], [9,7,6,2,1], [1,3,2,4,5,7,6], [8,6,4,4,1], [1,3,6,7,9,10], [1,2,3,4,5,6]]
            const output = countSafeReports(input)
            expect(output).toBe(3)
        })
    })
    describe("Task 2: Dampening", () => {
        test("Returns 1 when given a report that will be safe after dampening", () => {
            const input = [[1,3,2,4,5]]
            const output = countSafeReports(input, true)
            expect(output).toBe(1)
        })
        test("Returns 0 when given a report that is still unsafe after dampening", () => {
            const input = [[1,2,7,8,9]]
            const output = countSafeReports(input, true)
            expect(output).toBe(0)
        })
        test("Returns 1 when given a report that is safe without needing to dampen it", () => {
            const input = [[7,6,4,2,1]]
            const output = countSafeReports(input, true)
            expect(output).toBe(1)
        })
        test("Dampens by removing the very last item of the array if necessary", () => {
            const input = [[65,68,71,72,71]]
            const output = countSafeReports(input, true)
            expect(output).toBe(1)
        })
        test("Dampens by removing the very first element of the array if necessary", () => {
            const input = [[9,7,9,12,15,17,18]]
            const output = countSafeReports(input, true)
            expect(output).toBe(1)
        })
        test("Returns the total number of safe reports after dampening", () => {
            const input = [[7,6,4,2,1], [1,2,7,8,9], [9,7,6,2,1], [1,3,2,4,5], [8,6,4,4,1], [1,3,6,7,9]]
            const output = countSafeReports(input, true)
            expect(output).toBe(4)
        })
    })
})