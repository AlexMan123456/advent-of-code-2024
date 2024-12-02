function countSafeReports(reports){
    let safeReports = 0
    reports.forEach((report) => {
        const isSafe = isReportSafe(report)
        if(isSafe === true){
            safeReports = safeReports + 1
        }

    })
    return safeReports
    
    
    function isReportSafe(report){
        let isIncreasing = false
        let isDecreasing = false
        for(const stringIndex in report){
            const index = parseInt(stringIndex)
            if(index === reports[0].length-1){
                break
            }
            if(report[index+1] > report[index]){
                isIncreasing = true
            } else if(report[index+1] < report[index]){
                isDecreasing = true
            } else {
                return false
            }
            if(isIncreasing === isDecreasing){
                return false
            }
            if(Math.abs(report[index+1] - report[index]) > 3){
                return false
            }
        }
        return true
    }
}

module.exports = {countSafeReports}