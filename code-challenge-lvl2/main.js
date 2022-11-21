const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    const newArr = arr.map(name => `<h1> ${name} </h1>`)
    return newArr
}

console.log(peopleElements(people))

// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]


const arr1 = [ 1, 3, 5 ]
const arr2= [ 2, 4, 6 ]
const arr3 = [ ...arr1, ...arr2]
