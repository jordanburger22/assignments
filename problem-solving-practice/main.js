const numbers = [15, 50, 75, 1, 89, 101, 57]


function largestNumber(x){
    let largest = 0
    for (let i = 0; i < x.length; i++){
    if (largest < x[i]){
        largest = x[i]

    }
    }
    
console.log(largest)
}

largestNumber(numbers)

largestNumber([15, 25, 50, 87, 1, 100])



const test = ["$hello!", "%%^%%", "test!"]

function lettersWithStrings (x , y){
    for (let i = 0; i < x.length; i ++){
        if( x[i].includes(y)){
        console.log(x[i])
    }}
}

lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "d")
lettersWithStrings(test, '!')

function isDivisible( x, y ){
    if (x % y === 0){
        console.log(true)
    } else console.log(false)
}

isDivisible(6, 2)