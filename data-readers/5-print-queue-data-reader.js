const fs = require("fs/promises")

fs.readFile(`${__dirname}/../data/5-print-queue-data.txt`, "utf-8").then((response) => {
    const data = response.split("\n")
    const orderingRules = data.slice(0,data.indexOf("")).map((orderingRule) => {
        return orderingRule.split("|").map((number) => {
            return parseInt(number)
        })
    })
    const pageNumbers = data.slice(data.indexOf("")+1,data.length).map((pageNumbers) => {
        return pageNumbers.split(",").map((pageNumber) => {
            return parseInt(pageNumber)
        })
    })
})