function findNumber(numbers,target){
    let result="Not Found";

    for(let i=0;i<numbers.length;i++){
        let currentNum = numbers[i];

        if (currentNum < 0)
            continue;

        if (currentNum === target){
            result = "Found";
            break;
        }
    }
    return result;
}
const numArr=[-5,10,-2,7,20];
console .log("Searching for 7:", findNumber(numArr,7));
console.log("Searching for 99:", findNumber(numArr,99));