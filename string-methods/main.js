function upper (){
    var treat = ("cupcakes, brownies")
    var treatUppercCase = treat.toUpperCase()
    var result = treatUppercCase + treat
    console.log(result)
}

console.log(upper())

function half (){
    var treat = ("cupcakes, brownies")
    var halfLength = Math.floor(treat.length / 2)
    console.log(halfLength)
    
}
console.log(half())


function returnFirstHalf(){
    var half = "Hello World"
    console.log(half.indexOf("W"))
    var result = half.slice(0,6)
    console.log(result)
}

console.log(returnFirstHalf())

function upperAndLower(){
    var str = "Hello World"
    var firstHalf = str.slice(0,6)
    var lastHalf = str.slice(6)
    var result = firstHalf.toUpperCase() + lastHalf.toLowerCase()
    console.log(result)
}
console.log(upperAndLower())

function capitalize(){
    var practice = "hey friends! practice practice practice!"
    var letters = practice.split(" ")
    console.log(letters)
    
}

console.log(capitalize())