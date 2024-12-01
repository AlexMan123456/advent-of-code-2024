function findTotalDifference(list1, list2){
    list1.sort((a,b) => {return a-b})
    list2.sort((a,b) => {return a-b})

    const differenceBetweenElements = []
    for(let i=0; i<list1.length; i=i+1){
        differenceBetweenElements.push(Math.abs(list1[i] - list2[i]))
    }

    let total = 0
    for(const difference of differenceBetweenElements){
        total = total + difference
    }

    return total
}

function findSimilarityScore(list1, list2){
    const individualSimilarityScores = list1.map((numberInList1) => {
        if(list2.includes(numberInList1)){
            return numberInList1*list2.filter((numberInList2) => {return numberInList1 === numberInList2}).length
        }
        return 0
    })
    let total = 0
    for(const score of individualSimilarityScores){
        total = total + score
    }
    return total
}

module.exports = {findTotalDifference, findSimilarityScore}