function sumAllValidMuls(instructions){
    const validInstructions = findValidMuls(instructions)
    
    const sumOfMuls = validInstructions.map((instruction) => {
        return eval(instruction)
    }).reduce((previous, current) => {
        return previous + current
    })

    return sumOfMuls
}

function findValidMuls(instructions){
    const validInstructions = []
    for(let i=0; i<instructions.length; i=i+1){
        if(instructions[i] === "m" && instructions[i+1] === "u" & instructions[i+2] === "l"){
            let commaFound = false
            for(let j=i+3; j<instructions.length; j=j+1){
                if(j === i+3){
                    if(instructions[j] !== "("){
                        i = j
                        break
                    }
                } else if(isNaN(parseInt(instructions[j]))){
                    if(instructions[j] === ")" && commaFound === true){
                        validInstructions.push(instructions.slice(i,j+1))
                        i = j
                        break
                    }
                    if(instructions[j] === "," && commaFound === false){
                        commaFound = true
                    } else {
                        i = j
                        break
                    }
                }
            }
        }
    }
    return validInstructions
}

function mul(a,b){
    return a*b
}

module.exports = {sumAllValidMuls}