/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 8


const bigString = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"; // Create a variable called bigNumber
const totalLength = 13; // Create a variable called totalLength

let biggestTotal = 0; // Create a variable called biggestTotal
let biggestTotalString = "0000"; // Create a variable called biggestTotalString
let pos = 0; // Create a variable called pos
let currentTotal = 0; // Create a variable called currentTotal
let currentTotalString = "0000"; // Create a variable called currentTotalString

const calculateTotal = (string, start, end) =>{ // Create a function called calculateTotal, with 3 parameters: string, start and end
    let total = 1; // Create a variable called total
    for(e=0; e<end; e++){ // For loop that loops for the amount of times based off the value of the variable end
        total *= parseInt(string.charAt(start+e)); // Multiply the value of total by the value of the number of the character at index start + i in the string string
    }
    return total; // Return the value of total
}

for(i=0; i<(bigString.length)-totalLength; i++){ // For loop that loops a total amount of times, based off the value of the length of the variable string, minus the value of the variable totalLength


    currentTotalString = bigString.substr(i, totalLength); // Set the value of currentTotalString to the value of a sub string from the string bigString, starting at index i, with a length of totalLength
    currentTotal = calculateTotal(bigString, i, totalLength) // Set the value of currentTotal to the result of the function calculateTotal, using the values of bigString, i and totalLength as the parameters

    if (currentTotal > biggestTotal){ // If the value of currentTotal is greater than of equal to the value of biggestTotal, run the below code
        biggestTotal = currentTotal; // Set the value of biggestTotal to the value of currentTotal
        biggestTotalString = currentTotalString; // Set the value of biggestTotalString to the value of currentTotalString
        console.log(`The new biggest total is ${biggestTotal}, using the numbers ${biggestTotalString}`) // Print the information to the console in a clear format
    }
}
/*------------------------------------------------------------------------------------------------------------------*/