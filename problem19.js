/*------------------------------------------------------------------------------------------------------------------*/
// PROBLEM 19


// log all dates, where month = January, Day of the month = 0, and day = Sunday

let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Create an array called daysOfTheWeek, with 7 entries
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] // Create an array called months, with 12 entries
let date = [0, 0, 1901, 0]; // Create an array caled date, with 4 entries

const isLeapYear = (year) =>{

    if(year%100 !== 0){ // If the remainder of the value of year, when divided by 100, is not exactly the same as 0, run the below code
        if (year%4 === 0){ // If the remainder of the value of year, when divided by 4, is exactly the same as 0, run the below code
            return true; // Return the value true 
        }
        else{ // If the above if statement is not triggered, run the below code
            return false; // Return the value false
        }
    }
    else{ // if the above if statement is not triggered, run the below code
        if(year%400 ===0){ // If the remainder of the value of year, when divided by 400, is exactly the same as 0, run the below code
            return false; // Return the value false
        }
    }
}

const increaseDay = (day, month, year, weekDay) =>{ // Create a function called increaseDay

    let maxDays = 0; // Create a variable called maxDays

    if (weekDay < 6){ // If the value of weekDay is less than 6, run the below code
        weekDay++; // Increase the value of weekDay by 1
    }
    else{ // If the above if statement was not triggered, run the below code
        weekDay = 0; // Set the value of weekDay to 0
    }

    if ((month === 8) || (month === 3) || (month === 5) || (month === 10)){ // If the value of month is exactly the same as 8, 3, 5 or 10, run the below code
        maxDays = 29; // Set the value of maxDays to 29
    }
    else if (date[1] === 1){ // Else if the value of the data stored at index 1 of the array date is exactly the same as 1, run the below code
        if (isLeapYear(year)){ // If the result of the function isLeapYear, using the value of year as the parameter is true, run the below code
            maxDays = 28; // Set the value of maxDays to 28
        }
        else{ // If the above if statement is not triggered, run the below code
            maxDays = 27; // Set the value of maxDays to 27
        }
    }
    else{ // If the above if statements are not triggered, run the below code
        maxDays = 30; // Set the valur of maxDays to 30
    }

    if (day < maxDays){ // If the value of day is less than the value of maxDays, run the below code
        day++; // Increase the value of day by 1
    }
    else{ // If the above if statement is not triggered, run the below code
        day = 0; // Set the value of day to 0
        let result = increaseMonth(month, year); // Create an array called result, with the entries of the returned results from the function increaseMonth
        month = result[0]; // Set the value of month to the value of the data stored at index 0 in the array result
        year = result[1]; // Set the value of year to the value of the data stored at index 1 in the array result
    }
    return [day, month, year, weekDay] // Return an array containing the values day, month, year and weekDay
}

const increaseMonth = (month, year) =>{ // Create a variable called increaseMonth, with two parameters: month and year

    if (month < 11){ // If the value of month is less than 11, run the below code
        month++; // Increase the value of month by 1
    }
    else{ // If the above if statement is not triggered, run the below code
        month = 0; // Set the value of month to 0
        year++; // Increase the value of year by 1
    }
    return [month, year]; // Return an array containing the value of month and year
}

let totalSundays = 0; // Create a variable called totalSundays

while (date[2] < 2001){ // While loop that runs while the value of date[2] is less than 2001
    //console.log(`Day: ${date[0]+1}, Month: ${months[date[1]]}, Year: ${date[2]}, Weekday: ${daysOfTheWeek[date[3]]}`); // Print the information to the console in a clear format (for testing)
    if((date[0] === 0) && (date[3] === 6)){ // If the value of the data stored at index 0 of the array date is exactly the same as 0, and the value of the data stored at index 3 is exactly the same as 6, run the below code
        totalSundays++;// Increase the value of totalSundays by 1
    }
    let result = increaseDay(date[0], date[1], date[2], date[3]); // Create a variable called result
    for(i=0; i<result.length; i++){ // For loop that runs through every item in the array result
        date[i] = result[i]; // Set the value of the data stored at index i of the array date to the value of the data stored at index i of the array result
    }
}
console.log(`There are ${totalSundays} Sundays that fall at the begining of the month during the 20th century`); // Print the information to the console in a clear format
/*------------------------------------------------------------------------------------------------------------------*/