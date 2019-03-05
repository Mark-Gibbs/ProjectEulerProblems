/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 16


const toThePowerOf = (num, power) =>{ // Create a function called toThePowerOf, with two parameters: num and power
    return num**power; // Return the value of the variable number, multiplied by itself, the same amount of times as the value of the variable power
}
const sumOfDigits = (num) =>{ // Create a function called sumOfDigits, with one parameter: num
    let result = 0; // Create a variable called result
    let stringNum = num.toString(); // Create a variable called stringNum
    for(c=0; c<stringNum.length; c++){ // For loop that loops through all numbers from 0 to the value of the length of the variable stringNum
        result += parseInt(stringNum.charAt(c)); // Increase the value of the result by the number conversion of the character located at index i in the string stringNum
    }
    return result; // Return the value of result
}

console.log(sumOfDigits(toThePowerOf(2, 1000))); // Print the result of the function sumOfDigits, using the result of toThePowerOf, using the values 2 and 1000 as the parameters, as the parameter

/*
let power = 0;
let sum = 0;


for(i=0; i<=100; i++){
    power = toThePowerOf(2, i);
    sum = sumOfDigits(power);
    console.log(`2 to the power of ${i} = ${power}`);
    console.log(`The sum of the digits in the number ${power} = ${sum}`);
    console.log()
}
*/
/*------------------------------------------------------------------------------------------------------------------*/