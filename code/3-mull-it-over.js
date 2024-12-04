function sumAllValidMuls(instructions, useConditionals=false){
    const validInstructions = findValidMuls(instructions, useConditionals)
    
    const sumOfMuls = validInstructions.map((instruction) => {
        return eval(instruction)
    }).reduce((previous, current) => {
        return previous + current
    })

    return sumOfMuls
}

function findValidMuls(instructions, useConditionals){
    const validInstructions = []
    let isDoActive = true
    for(let i=0; i<instructions.length; i=i+1){
        if(useConditionals === true && instructions.slice(i,i+7) === "don't()"){
            isDoActive = false
        } else if(useConditionals === true && instructions.slice(i,i+4) === "do()"){
            isDoActive = true
        }
        if(useConditionals === false || isDoActive === true){
            if(instructions.slice(i,i+3) === "mul"){
                const {endOfMul, isMulValid} = findEndOfMul(instructions, i)
                if(isMulValid === true){
                    validInstructions.push(instructions.slice(i,endOfMul+1))
                }
                i = endOfMul
            }
        }
    }
    return validInstructions
}

function findEndOfMul(instructions, index){
    let commaFound = false
    for(let i=index+3; i<instructions.length; i=i+1){
        if(i === index+3){
            if(instructions[i] !== "("){
                return {endOfMul: i, isMulValid: false}
            }
        } else if(isNaN(parseInt(instructions[i]))){
            if(instructions[i] === ")" && commaFound === true){
                return {endOfMul: i, isMulValid: true}
            }
            if(instructions[i] === "," && commaFound === false){
                commaFound = true
            } else {
                return {endOfMul: i, isMulValid: false}
            }
        }
    }
}

function mul(a,b){
    return a*b
}

module.exports = sumAllValidMuls