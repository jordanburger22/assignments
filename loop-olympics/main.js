/*for (let i = 0; i <= 9; i++){
    console.log(i)
}

for (let i = 9; i > 0; i--){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]

for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

var numbers = []
for (let i = 0; i <= 9; i++){
     numbers.push(i)
}
console.log(numbers)


for (let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const lessFruit = []
for ( let i = 0; i < fruit.length; i+=2){
    lessFruit.push(fruit[i])
    
}
console.log(lessFruit)


const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  for (let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
  }

var names = []
var jobs = []

/*for (let i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name)
    jobs.push(peopleArray[i].occupation)
}
console.log(names)
console.log(jobs)


for (let i = 0; i < peopleArray.length; i+=2){
    names.push(peopleArray[i].name)
    jobs.push(peopleArray[i + 1].occupation)
}

console.log(names)
console.log(jobs)
*/

var array1 = []

for( let i = 0; i < 3; i++){
    array1[i] = []
    for( let j = 0; j < 3; j++){
        array1[i][j] = 0
    }
}
console.log(array1)

var array2 = []

for( let i = 0; i < 3; i++){
    array2[i] = []
    for( let j = 0; j < 3; j++){
        array2[i][j] = i
    }
}
console.log(array2)

var array3 = []

for( let i = 0; i < 3; i++){
    array3[i] = []
    for( let j = 0; j < 3; j++){
        array3[i][j] = j
    }
}
console.log(array3)

var arrayX = []

for( let i = 0; i < 3; i++){
    arrayX[i] = []
    for( let j = 0; j < 3; j++){
        arrayX[i][j] = 'X'
    }
}
console.log(arrayX)