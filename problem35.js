/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 35

const isPrime = (num) => { // Create a function called isPrime, with the parameter n - returns a boolean
    if (num == 2){ // If the value of n is exactly the same as 2, run the below code
        return true; // Return the value true
    }
    else if (num > 2){ // If the above if statement is not triggered, and the value of n is greater than 2, run the below code
        for(j=2; j<num; j++){ // For loop that loops through all the numbers from 2 to 1 less than the value of n
            if(num%j === 0){ // If the remainder of the value of n divided by the value of i is exactly the same as 0, run the below code
                return false; // Return the value false
            }
        }
        return true; // Return the value true
    }
    return false; // Return the value false
}

const generateCirculars = (num) =>{ // Create a function called generateCirculars, with 1 parameter: num - returns an array
    let stringNum = num.toString(); // Create a variable called stringNum
    let result = [num.toString()]; // Create a variable called result

    for(bigLoop=1; bigLoop<stringNum.length; bigLoop++){ // Loop 4 times, to get 4 4 digit long numbers
        entry = ""; // Create a variable called entry
        entryArray = [] // Create a variable called entryArray

        for(smallLoop=0; smallLoop<stringNum.length; smallLoop++){ // For loop that loops through all the numbers from 0 to the value of the length of the string stringNum
            entryArray[smallLoop] = `${stringNum.charAt(smallLoop)}`; // Set the value stored in the array entryArray
        }
        entryArray.push(entryArray[0]); // Add the value stored at index 0, in the aray entryArray to the end of the array entryArray
        entryArray.shift(); // Remove the first item from the array entryArray, and decrease the index of all entries by 1
        entry = entryArray.join(""); // Set the value of entry to the value of the joint entries in the array entryArray, with no space between them

        stringNum = entry; // Set the value of stringNum to the value of entry
        result[bigLoop] = entry; // Set the value of the array result, at the index of the value bigLoop, to the value of entry
    }
    return result; // Return the value of result
}

const isCircularPrime = (num) =>{ // Create a function called isCircularPrime - returns a boolean
    if (isPrime(num)){ // If the result of the function isPrime, using num as the parameter, is true, run the below code
        let arrayOfCirculars = generateCirculars(num); // Create an array called arrayOfCirculars, with entries equal to the result of the function generateCirculars, using num as the parameter
        result = true; // Set the value of result to true
        for(k=0; k<arrayOfCirculars.length; k++){ // For loop that loops through all the numbers from 0 to the value of the length of the array arrayOfCirculars
            if(!isPrime(arrayOfCirculars[k])){ // If the result of the function isPrime, using the value stored at the index with the same value as the value of k, in the array arrayOfCirculars, is not true, run the below code
                //console.log(`${arrayOfCirculars[k]} is a prime number, but not a circular prime`)
                return false; // Return false
            }
        }
        return true; // Return true
    }
    return false; // Return false
}

let totalCircularPrimes = 0; // Create a variable called totalCircularPrimes
let arrayCircularPrimes = []; // Create an array called arrayCircularPrimes
let start = 0; // Create a variable called start
let end = 1000; // Create a variable called cap

for(checkNum=start; checkNum<end; checkNum++){ // For loop that loops through all the numbers from 0, to the value of the variable checkNum
    if (isCircularPrime(checkNum)){ // If the result of the function isCircularPrime, using the value of checkNum as the parameter is true, run the below code
        totalCircularPrimes++; // Increase the value of totalCircularPrimes
        arrayCircularPrimes.push(checkNum); // Add the value of checkNum to the end of the array arrayCircularPrimes
        //console.log(`${checkNum} is a prime number, and is a circular prime`) // Print the information to the console (for testing)
    }
}
console.log(`There are ${totalCircularPrimes} circular prime numbers between ${start}, and ${end}\nThese numbers are: ${arrayCircularPrimes.join(", ")}`); // Print the information to the console in a clear format
/*------------------------------------------------------------------------------------------------------------------*/