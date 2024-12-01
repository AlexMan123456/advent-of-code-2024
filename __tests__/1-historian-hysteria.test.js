const {findTotalDifference, findSimilarityScore} = require("../code/1-historian-hysteria.js")

describe("historianHysteria", () => {
    test("Returns a number", () => {
        expect(typeof findTotalDifference([1], [3])).toBe("number")
    })
    test("Returns the distance between two numbers when each list only has one number, where order doesn't matter", () => {
        expect(findTotalDifference([1], [3])).toBe(2)
        expect(findTotalDifference([3], [1])).toBe(2)
    })
    test("Returns the total distance between all numbers in each list when the lists are already sorted", () => {
        expect(findTotalDifference([1,3,8], [2,6,12])).toBe(8)
        expect(findTotalDifference([2,6,12], [1,3,8])).toBe(8)
    })
    test("Returns the total distance between all numbers in each list, where each number should be paired in order", () => {
        expect(findTotalDifference([1,3,10,8], [2,6,5,14])).toBe(9)
        expect(findTotalDifference([2,6,5,14], [1,3,10,8])).toBe(9)
    })
})

describe("findSimilarityScore", () => {
    test("Returns a number", () => {
        expect(typeof findSimilarityScore([1], [3])).toBe("number")
    })
    test("Returns the same number when the number appears in both lists once, and each list only contains one item", () => {
        expect(findSimilarityScore([3], [3])).toBe(3)
    })
    test("Returns 0 when there are no matching items", () => {
        expect(findSimilarityScore([1], [3])).toBe(0)
    })
    test("When each list has more than one item with one pair of duplicate items, return the duplicated number", () => {
        const list1 = [1, 3, 6, 10, 12]
        const list2 = [2, 4, 6, 8, 9]
        expect(findSimilarityScore(list1, list2)).toBe(6)
    })
    test("When each list has more than one item with many duplicate numbers, return the total similarity score", () => {
        const list1 = [1, 3, 6, 10, 12, 3, 8, 6]
        const list2 = [2, 4, 6, 6, 8, 9, 3, 3, 3]
        expect(findSimilarityScore(list1, list2)).toBe(9+12+9+8+12)
    })
})