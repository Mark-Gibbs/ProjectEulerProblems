/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 5


const checkDividers = (num, dividers) =>{ // Create a function called checkDividers, with two parameters: num and dividers
    let passed = true; // Create a variable called passed
    for(i=1; i<dividers+1; i++){ // For loop that loops through the numbers from 1 to the value of dividers, in increments of 1
        if (num%i !== 0){ // If the remainder of the value of num divided by the value of i is not exactly the same as 0, run the below code
            passed = false; // Set the value of passed to false
        }
    }
    return passed; // Return the value of passed
}

let minFound = false; // Create a variable called minFound
let num = 1; // Create a variable called num
let numberOfDivisions = 20; // Create a variable called numberOfDvisions

while (!minFound){ // While the value of minFound is not true, run the below code
    if (checkDividers(num, numberOfDivisions)){ // if the result of the function checkDividers, using the values of num and numberOfDivisions as the parameters, is true, run the below code
        minFound = true; // Set the value of minFound to true
        console.log(`The smallest positive number that is evenly divisible by all of the numbers from 1 to ${numberOfDivisions} is ${num}`); // Print the information to the console in a clear format
    }
    else{ // If the above if statement is not triggered, run the below code
        num++; // Increase the value of num by 1
    }
}
/*------------------------------------------------------------------------------------------------------------------*/