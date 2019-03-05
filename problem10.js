/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 10

const isPrime = (n) => { // Create a function called isPrime, with the parameter n
    if (n === 2){ // If the value of n is exactly the same as 2, run the below code
        return true; // Return the value true
    }
    else if (n > 2){ // If the above if statement is not triggered, and the value of n is greater than 2, run the below code
        for(c=2; c<n; c++){ // For loop that loops through all the numbers from 2 to 1 less than the value of n
            if(n%c === 0){ // If the remainder of the value of n divided by the value of i is exactly the same as 0, run the below code
                return false; // Return the value false
            }
        }
        return true; // Return the value true
    }
    return false; // Return the value false
}

const endNumber = 2000000; // Create a variable called endNumber
let total = 0; // Create a variable called total

for(i=0; i<endNumber; i++){ // For loop that loops through all the numbers from 0 to 1 less than the value of endNumber
    if (isPrime(i)){ // If the result of the function isPrime, using the 
        total += i;
    }
    //console.log(i);
}

console.log(total);
/*------------------------------------------------------------------------------------------------------------------*/