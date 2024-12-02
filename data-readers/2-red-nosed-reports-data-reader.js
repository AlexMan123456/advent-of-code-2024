const fs = require("fs/promises")
const { countSafeReports } = require("../code/2-red-nosed-reports")

fs.readFile(`${__dirname}/../data/2-red-nosed-reports-data.txt`, "utf-8").then((response) => {
    const data = response.split("\n").map((row) => {
        return row.split(" ").map((entry) => {
            return parseInt(entry)
        })
    })
    console.log("Task 1:", countSafeReports(data, false))
    console.log("Task 2:", countSafeReports(data, true))
})