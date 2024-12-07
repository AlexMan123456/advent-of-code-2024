function getTotalOfValidMiddlePages(orderingRules, allUpdates){
    const validUpdates = []
    for(const pageNumbers of allUpdates){
        if(isUpdateValid(orderingRules, pageNumbers)){
            validUpdates.push(pageNumbers)
        }
    }
    const total = validUpdates.map((pageNumbers) => {
        return pageNumbers[(pageNumbers.length-1)/2]
    }).reduce((previous, current) => {
        return previous + current
    }, 0)
    return total
}

function isUpdateValid(orderingRules, pageNumbers){
    for(const rule of orderingRules){
        let firstNumberIndex = -1
        let secondNumberIndex = -1
        for(const pageIndex in pageNumbers){
            const page = pageNumbers[pageIndex]
            if(page === rule[0]){
                firstNumberIndex = parseInt(pageIndex)
            }
            if(page === rule[1]){
                secondNumberIndex = parseInt(pageIndex)
            }
        }
        if(firstNumberIndex >= 0 && secondNumberIndex >= 0){
            if(secondNumberIndex<firstNumberIndex){
                return false
            }
        }
    }
    return true
}

module.exports = getTotalOfValidMiddlePages