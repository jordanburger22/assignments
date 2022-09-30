var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop ()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var orange = fruit.indexOf("orange")
console.log(orange)

console.log(vegetables.length)

vegetables.push("3")
console.log(vegetables)

var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

var reverse = food.reverse()
console.log(reverse)

 var stringList = food.join(" ")
 console.log(stringList)