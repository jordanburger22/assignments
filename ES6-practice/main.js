// const carrots = ["bright orange", "ripe", "rotten"]

// // function mapVegetables(arr) {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }

// const mapVegetables = (arr) => arr.map( carrot => ({ type: "carrot", name: carrot}))

// console.log(mapVegetables(carrots))


// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = (arr) => arr.filter(people => people.friendly === true)

// console.log(filterForFriendly(people))


// const sum = (a, b) => a + b


// var produceProduct = (a, b) => a * b

// console.log(produceProduct(2, 5))

// let firstName = "Jane"
// let lastName = "Doe"
// let age = 100
// const printString = (firstName, lastName, age) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)

// console.log(printString('kat', 'stark', 25))

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 

// const filterForDogs = (arr) => arr.filter(animal => animal.type === "dog")

//  console.log(filterForDogs(animals))


// const welcome = (location, name) => (`Hi ${name}! \nWelcome to ${location} I hope you enjoy your stay. \nPlease ask the president of ${location} if you need anything`)

// console.log(welcome("Hawaii", "Jane"))