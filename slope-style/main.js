// function collectAnimals(...animal) {
//     let animals = Array(...animal)
//     console.log(animals)
// }

// const collectAnimals = (...animal) => Array(...animal);

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// function combineFruit(fruit, sweets, vegetables){
//     let obj = {fruit ,
//         sweets,
//         vegetables}
//     return obj
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))



//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce((acc, number) => {
//       return acc * number;
//     }, 1)
//   }
  
// console.log(product(1, 2, 3, 4 , 5))

        //IS THIS RIGHT//

// let combineAnimals = (arr1, arr2, arr3) => combinedArray = [...arr1, ...arr2, ...arr3]

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// // ["dog", "cat", "mouse", "jackolope", "platypus"]





// let returnFirst = (items) =>{
//     const [a, b] = items; /*change this line to be es6*/
//     return a
// }




// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// let [a, b, c, d, e, f] = favoriteActivities
// function returnFavorites(arr){
//     firstFav = a
//     secondFav = b
//     thirdFav = c
//     return `My top three favorite activities are,  + ${firstFav} + ,  + ${secondFav} + , and  + ${thirdFav}`;
// }

// returnFavorites(favoriteActivities)

// console.log(returnFavorites(favoriteActivities))

// function unshift(array, ...a) {
//   return [...a].concat(array);
// }

function populatePeople(names){
  return names.map((name) => {
      name = name.split(" ");
    
      return {
          firstName: name[0],
          lastName: name[1]
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]