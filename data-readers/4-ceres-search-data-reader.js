const fs = require("fs/promises")
const {findXmasInWordsearch, findX_Mas} = require("../code/4-ceres-search")

fs.readFile(`${__dirname}/../data/4-ceres-search-data.txt`, "utf-8").then((response) => {
    const data = response.split("\n")
    console.log(findXmasInWordsearch(data))
    console.log(findX_Mas(data))
})