// function total(arr) {
//     test = arr.reduce(function(final, num){
//         final += num
//         return final
//     })
//     return test
//  }
 
//  console.log(total([1,2,3])); // 6
 
// function stringConcat(arr) {
//     test = arr.reduce(function(final, num){
//         final += num
//         return final
//     }, "")
//     return test
    
//  }
 
//  console.log((stringConcat([1,2,3]))); // "123"


// function totalVotes(arr) {
//     test = arr.reduce(function(final, voter){
//         if (voter.voted){
//             final++
//         }
//         return final
//     }, 0)
//     return test
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
 
// function shoppingSpree(arr) {
//     test = arr.reduce(function(final , num){
//         final += num.price
//         return final
//     }, 0)
//     return test
// }
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
 
function flatten(arr) {
   test = arr.reduce(function(final , items){
        return [...final, ...items]
        //return final.concat(items)
    }, [])
    return test
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    test = arr.reduce(function(final , person){
//     if(person.age <= 25){
//         final.numYoungPeople++
//     } else if(person.age > 25 && person.age <= 35){
//         final.numMidPeople++} else final.numOldPeople ++ ;
        
//         if(person.age <= 25 && person.voted === true){
//             final.numYoungVotes++
//         } else if(person.age > 25 && person.age <= 35 && person.voted === true){
//             final.numMidVotes++} else if (person.age > 35 && person.voted === true){
//                 final.numOldVotes++
//             }
//         return final
//    }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})
//    return test
// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
