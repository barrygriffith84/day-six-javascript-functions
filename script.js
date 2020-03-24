// Lightning Exercise
// I Love JavaScript
// Write a function that logs the string "I love JavaScript!" to the console.
// Call the function.

function love() {
    console.log("I love JavaScript!")
}

love()

// Lightning Exercise
// Dream Vacation
// Write a function that accepts two parameters of name and destination.
// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.

function vacation(name, destination) {
    console.log(`${name} would love to visit ${destination}.`)
}

vacation("Barry","San Diego");


// Lightning Exercise
// Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence.
// Execute the function.
// Log the returned sentence to the console.

function tacoOrder(typeOfShell, topping){
    var madeTaco = `One ${typeOfShell} taco with ${topping}`
    return madeTaco
}

var taco = tacoOrder("soft shell", "beef");

console.log(taco);

// These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below. It doesn't matter what directory you are currently in.

// mkdir -p ~/workspace/on-boarding/exercises/javascript/functions && cd $_
// touch index.html script.js
// Be sure to add boilerplate HTML to your index.html file and link it to script.js.

// 1. Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// Call each function three times with different parameters.

function add(num1, num2){
    console.log(num1 + num2)
}

function subtract(num1, num2){
    console.log(num1 - num2)
}

function multiply(num1, num2){
    console.log(num1 * num2)
}

function divide(num1, num2){
    console.log(num1 / num2)
}

add(1, 2)
add(5, 2)
add(1, 4)

subtract(4, 1)
subtract(2, 1)
subtract(1, 3)

multiply(1, 2)
multiply(2, 3)
multiply(7, 2)

divide(12, 3)
divide(6, 2)
divide(1, 2)

// 2. Calculator Refactor
// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.

function add(num1, num2){
    var sum = (num1 + num2)
    return sum
}

function subtract(num1, num2){
    var difference = (num1 - num2)
    return difference
}

function multiply(num1, num2){
    var product = (num1 * num2)
    return product
}

function divide(num1, num2){
    var quotient = (num1 / num2)
    return quotient
}

var sum1 = add(6, 2);
var difference1 = subtract(6, 2);
var product1 = multiply(6 ,2);
var quotient1 = divide(6, 2);

console.log(sum1)
console.log(difference1)
console.log(product1)
console.log(quotient1)

// 3. Greetings Pt. 2
// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

function greeting(name, language){
    if (language === "English") {
        console.log(`Hello, ${name}!`)
    } else if (language === "Spanish") {
        console.log(`Hola, ${name}`)
    }
}

greeting("Barry", "English")

// 4. Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.
// Example console output:

// "You ordered a toasted meatball sub sandwich on wheat."

function sandwich(breadType, sandwichName, isToasted){
    var order
    if (isToasted === true) {
        order = `Gimme a toasted ${sandwichName} on ${breadType}!`
    } else {
        order = `Gimme a ${sandwichName} on ${breadType} and don't toast it!`
    }
    return order
}

console.log(sandwich("rye", "rueben", true))
console.log(sandwich("white", "club", false))
console.log(sandwich("herb bread", "pastrami", true))

// 5. The Rock's Hobbies
// Copy and paste the following object into your JavaScript file:
// var dwayneObject = {
//   firstName: "Dwayne",
//   nickName: "The Rock",
//   lastName: "Johnson",
//   favoriteFood: "Eggs",
//   hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
// }

// function printHobbies(){
// // YOUR CODE GOES HERE
// }
// The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.
// Call the printHobbies function.

var dwayneObject = {
      firstName: "Dwayne",
      nickName: "The Rock",
      lastName: "Johnson",
      favoriteFood: "Eggs",
      hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
    }

function printHobbies(actorHobbiesArray) {
    for(i = 0; i < actorHobbiesArray.length; i++) {
        console.log(actorHobbiesArray[i])
    }
}

printHobbies(dwayneObject.hobbies)



// 6. New Years Eve Party
// Copy and paste the following array into your JavaScript file:

// var partyGuests = [
//   {
//     name: "Sam",
//     age: 18
//   },
//   {
//     name: "Jerry",
//     age: 45
//   },
//   {
//     name: "Lila",
//     age: 29
//   },
//   {
//     name: "Mary",
//     age: 68
//   },
//   {
//     name: "Todd",
//     age: 10
//   }
// ]

// function ageChecker(){

//   // YOUR CODE GOES HERE
// }
// Fill in the ageChecker function so that it does the following things:
// Loop through the partyGuests and check if each guest is at least 21.
// Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// Log the sentnece to the console.
// 7. Celsius to Fahrenheit
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
// Output the temperature in Fahrenheit to the console
// Write a second function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
// Output the temperature in Celsius to the console
// Example output:

// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenheit. That converts to [degrees in Celsius] Celsius."
// 8. It All Adds Up!
// Copy and paste the following code into your JavaScript file:

// var outsideArray =  [4, 7, 8008, 11, 9, -1];
// In your JavaScript file, create (declare) a function named addThemUp.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
// The addThemUp function should return the sum.
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
// Log mySum to the console.
// Try changing the numbers in the array or adding new numbers.
// 9. Law of Averages
// Copy and paste the following code into your JavaScript file:

// var scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];
// In your JavaScript file, create (declare) a function named findAverage.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and find their average.
// The findAverage function should return the average of all the numbers.
// Call findAverage and pass in scoresToAverage as an argument.
// Save the returned value in a variable called myAverage.
// Log myAverage to the console.
// Try adding new numbers to the outsideArray. Your function should still return the correct average no matter how many items are in the array.
// 10. Shipping Calculator
// You work for an online clothing retailer. Every time an order ships, your company needs to calculate the cost of shipping so they can charge the customer correctly. Because they need to make this calculation so many times and in so many places, they've asked you to write a function that calculates shipping cost based on package weight, distance to destination, and whether or not the package is oversized.
// The cost of shipping is always the weight of the package multiplied by the distance it needs to travel, divided by 100.
// If the package is oversized, it adds ten dollars to the cost of shipping.
// Write a function that accepts whatever information you need to calculate the cost of shipping and returns the cost as an integer.
// Execute the function and output the result to the console.