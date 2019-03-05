/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 1


isMultipleOfThree = (num) => {
    if (num%3 === 0){
        return true;
    }
    return false;
}

isMultipleOfFive = (num) => {
    if (num%5 === 0){
        return true;
    }
    return false;
}

let total = 0;
let max = 100;

for (i=0; i<=100; i++){
    if (isMultipleOfThree(i) || isMultipleOfFive(i)){
        total += i;
    }
}

console.log(`The sum of all numbers under ${max}, that are multiples of 3 and 5, is ${total}.`);
/*------------------------------------------------------------------------------------------------------------------*/