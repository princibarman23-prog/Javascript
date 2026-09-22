function menuChoice(choice)
{
    let result="";

    switch(choice)
    {
        case 1:
            result="Start Game"
            break;
        case 2:
            result="Load Game"
            break;
        case 3:
            result="Settings"
            break;
        case 4:
            result="Exit"
            break;
        default:
            result="Invalid Choice"
            break;
    }
    return result;
}

console.log("Choice 1:", menuChoice(1));
console.log("Choice 2:", menuChoice(2));
console.log("Choice 3:", menuChoice(3));
console.log("Choice 4:", menuChoice(4));
console.log("Choice 5:", menuChoice(5));