function countSafeReports(reports, dampen=false){
    let safeReports = 0
    reports.forEach((report) => {
        const isSafe = isReportSafe(report, dampen)
        if(isSafe === true){
            safeReports = safeReports + 1
        }
    })
    return safeReports
    
    
    function isReportSafe(report, dampen){
        let isIncreasing = false
        let isDecreasing = false
        for(const stringIndex in report){
            const index = parseInt(stringIndex)
            if(index === report.length-1){
                return dampen === true ? isReportSafe(report.toSpliced(index+1, 1), false) : true
            }
            if(report[index+1] > report[index]){
                isIncreasing = true
            } else if(report[index+1] < report[index]){
                isDecreasing = true
            } else {
                return dampen === true ? isDampenedReportSafe(report, index) : false
            }
            if(isIncreasing === true && isDecreasing === true){
                return dampen === true ? isDampenedReportSafe(report, index) : false
            }
            if(Math.abs(report[index+1] - report[index]) > 3){
                return dampen === true ? isDampenedReportSafe(report, index) : false
            }
        }
        return true
    }

    function isDampenedReportSafe(report, index){
        if(index === 1){
            const isSafeAfterRemovingFirstItem = isReportSafe(report.toSpliced(0, 1), false)
            if(isSafeAfterRemovingFirstItem === true){
                return true
            }
        }
        const isSafeAfterRemovingIndexedItem = isReportSafe(report.toSpliced(index, 1), false)
        if(isSafeAfterRemovingIndexedItem === false){
            const isSafeAfterRemovingNextItem = isReportSafe(report.toSpliced(index+1, 1), false)
            if(isSafeAfterRemovingNextItem === true){
                return true
            }
        }
        return isSafeAfterRemovingIndexedItem
    }
}

module.exports = {countSafeReports}