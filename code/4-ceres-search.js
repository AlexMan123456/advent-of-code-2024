function findXmasInWordsearch(wordsearch){
    let totalXmas = 0
    wordsearch.forEach((row, currentRowIndex, allRows) => {
        for(let rowLetterIndex=0; rowLetterIndex<row.length; rowLetterIndex=rowLetterIndex+1){
            //check rows of wordsearch
            if(containsXmas(row.slice(rowLetterIndex,rowLetterIndex+4))){
                totalXmas = totalXmas + 1
            } 
            //check columns of wordsearch
            let currentColumn = ""
            for(let i=currentRowIndex; i<currentRowIndex+4; i=i+1){
                if(currentRowIndex <= allRows.length - 4 && currentRowIndex >= 0){
                    currentColumn = currentColumn + (allRows[i][rowLetterIndex] !== undefined ? allRows[i][rowLetterIndex] : "")
                }
            }
            if(containsXmas(currentColumn)){
                totalXmas = totalXmas + 1
            }
        }
    })
    return totalXmas
}

function containsXmas(string){
    if(string === "XMAS" || [...string].reverse().join("") === "XMAS"){
        return true
    }
    return false
}

module.exports = findXmasInWordsearch