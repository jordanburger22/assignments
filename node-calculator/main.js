const readlineSync = require("readline-sync")

var number1 = readlineSync.question("Choose your first number ")

var number2 = readlineSync.question("Choose your second number ")

var operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ")

var num1 = Number(number1)
var num2 = Number(number2)

if (operation === "add") {
     console.log(num1 + num2)
}    
    else if (operation === "sub") {
        console.log(num1 - num2)
    }  

    else if (operation === "mul"){
        console.log(num1 * num2)
    }
    else if (operation === "div"){
        console.log(num1 / num2)
    }
