const fs = require("fs/promises")
const sumAllValidMuls = require("../code/3-mull-it-over.js")

fs.readFile(`${__dirname}/../data/3-mull-it-over-data.txt`, "utf-8").then((data) => {
    console.log("Task 1:", sumAllValidMuls(data, false))
    console.log("Task 2:", sumAllValidMuls(data, true))
})