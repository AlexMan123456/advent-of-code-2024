const fs = require("fs/promises")
const {findTotalDifference, findSimilarityScore} = require("../code/1-historian-hysteria.js")

fs.readFile(`${__dirname}/../data/1-historian-hysteria-data.txt`, "utf-8").then((response) => {
    const data = response.split("\n").map((row) => {return row.split("   ")})
    const list1 = []
    const list2 = []
    for(let i=0; i<data.length; i=i+1){
        list1.push(parseInt(data[i][0]))
        list2.push(parseInt(data[i][1]))
    }
    console.log("Task 1:", findTotalDifference(list1, list2))
    console.log("Task 2:", findSimilarityScore(list1, list2))
})