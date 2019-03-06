/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 14


const branch = (n) => {
    if (n%2 === 0){ // If n is even
        return Math.floor(n/2); // Math.floor might not be necessary, but it removes any decimals
    }
    else{ // If n is odd
        return (n * 3) + 1;
    }
}

const max = 1000000;
const generateList = false; // Set to true if you want to generate a complete list for each number
let list = ""; // Used if you want to generate the list
let length = 1;
let num = 1;

let finalList = list; // Used if you want to generate the list
let finalLength = length;
let finalNum = num;

for (i=1; i<max; i++){
    if(generateList){list = `${num}`;} // Used if you want to generate the list
    length = 1;

    while(num > 1){ // Generate list and length
        num = branch(num);
        if(generateList){list += ` -> ${num}`;} // Used if you want to generate the list
        length++;
    }
    
    num = i; // Reset num to it's value before branch changes

    if(length > finalLength){
        finalLength = length;
        finalNum = i-1;
        if(generateList){finalList = list;} // Used if you want to generate the list
    }
}
console.log(`The number below ${max}, that produces the longest Collatz sequence is ${finalNum}, with a length of ${length} items`)
if(generateList){console.log(finalList);} // Used if you want to generate the list
/*------------------------------------------------------------------------------------------------------------------*/