function classifyNumber(number){
    if (number>0)
        return "Positive";

    else if (number<0)
        return "Negative"

    else
        return "Zero"
}

console.log(classifyNumber(-8))
console.log(classifyNumber(9))
console.log(classifyNumber(0))