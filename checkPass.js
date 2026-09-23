function checkPassword(passwords){
    let i=0;

    if (passwords.length === 0)
        return "Password Failed"

    do{
        if(passwords[i]==="1234")
            return "Password Correct"
        i++;
    }
    while (i<passwords.length);

    return "Password Failed"
}

console.log(checkPassword(["qwert","1234","password"]));
console.log(checkPassword(["wrong1","abc","2341"]))