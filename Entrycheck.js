function checkEntry(age, hasID){
    if (age>=18)
        if (hasID)
            return "Allowed"
        else
            return "ID required"
    else
        return "Too Young"
}

console.log(checkEntry(19, false))
console.log(checkEntry(16, true))
console.log(checkEntry(20, true))
