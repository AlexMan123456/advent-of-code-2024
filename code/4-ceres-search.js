function findXmasInWordsearch(wordsearch){
    let totalXmas = 0
    wordsearch.forEach((row, currentRowIndex, allRows) => {
        for(let rowLetterIndex=0; rowLetterIndex<row.length; rowLetterIndex=rowLetterIndex+1){
            //check rows of wordsearch
            if(isWordsearchWordValid(row.slice(rowLetterIndex,rowLetterIndex+4), "XMAS")){
                totalXmas = totalXmas + 1
            }

            //check columns of wordsearch
            let currentColumn = ""
            if(currentRowIndex <= allRows.length - 4 && currentRowIndex >= 0){
                for(let i=0; i<4; i=i+1){
                    currentColumn = currentColumn + allRows[currentRowIndex+i][rowLetterIndex]
                }
            }
            if(isWordsearchWordValid(currentColumn, "XMAS")){
                totalXmas = totalXmas + 1
            }

            //check diagonally going from left to right
            let currentRightDiagonal = ""
            if(rowLetterIndex <= row.length - 4 && currentRowIndex <= allRows.length - 4 && rowLetterIndex >= 0){
                for(let i=0; i<4; i=i+1){
                    currentRightDiagonal = currentRightDiagonal + allRows[currentRowIndex+i][rowLetterIndex+i]
                }
            }
            if(isWordsearchWordValid(currentRightDiagonal, "XMAS")){
                totalXmas = totalXmas + 1
            }

            //check diagonally going from right to left
            let currentLeftDiagonal = ""
            if(rowLetterIndex >= 3 && currentRowIndex <= allRows.length - 4 && rowLetterIndex >= 0){
                for(let i=0; i<4; i=i+1){
                    currentLeftDiagonal = currentLeftDiagonal + allRows[currentRowIndex+i][rowLetterIndex-i]
                }
            }
            if(isWordsearchWordValid(currentLeftDiagonal, "XMAS")){
                totalXmas = totalXmas + 1
            }
        }
    })
    return totalXmas
}

function findX_Mas(wordsearch){
    let totalX_Mas = 0
    for(let currentRowIndex=0; currentRowIndex<=wordsearch.length-3; currentRowIndex=currentRowIndex+1){
        for(let rowLetterIndex=0; rowLetterIndex<=wordsearch[currentRowIndex].length-2; rowLetterIndex=rowLetterIndex+1){
            let currentLeftDiagonal = ""
            let currentRightDiagonal = ""
            for(let i=0; i<=2; i=i+1){
                currentLeftDiagonal = currentLeftDiagonal + wordsearch[currentRowIndex+i][rowLetterIndex+i]
                currentRightDiagonal = currentRightDiagonal + wordsearch[currentRowIndex+i][2+rowLetterIndex-i]
            }
            if(isWordsearchWordValid(currentLeftDiagonal, "MAS") && isWordsearchWordValid(currentRightDiagonal, "MAS")){
                totalX_Mas = totalX_Mas + 1
            }
        }
    }
        return totalX_Mas
}

function isWordsearchWordValid(testString, targetString){
    if(testString === targetString || [...testString].reverse().join("") === targetString){
        return true
    }
    return false
}

module.exports = {findXmasInWordsearch, findX_Mas}