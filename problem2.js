const fibonacci = (n) => { // Create fibinacci function
    if (n <= 2){ // If the value of n is less than or eaqual to 2, run the below code
        return 1; // Return 1
    }
    else{ // If the above if statement is not triggered, run the below code
        return fibonacci(n-1) + fibonacci(n-2); // Return the value of the fibonacci function, using the value of n-1, plus the value of the fibonacci function, using the value of n-2
    }
}

const isMultipleOfTwo = (num) => {
    if (num%2 === 0){
        return true;
    }
    return false;
}

let total = 0;
let max = 4000000;
let n = 2;
let fibonacciN = 0;

while (fibonacci(n) < max){
    fibonacciN = fibonacci(n);

    if(isMultipleOfTwo(fibonacciN)){
        total += fibonacciN;
    }
    n++;
}
console.log(`The sum of all numbers in the fibonacci sequence, where the value of the number in the fibonacci sequence is even, and below ${max}, is ${total}.`);