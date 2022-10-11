// function fiveAndGreaterOnly(arr) {
//     const test = arr.filter(function(num){
//         if (num >= 5)
//         return true
//     })
//     return test
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
  

// function evensOnly(arr) {
//     const test = arr.filter(function(num){
//         if(num % 2 === 0){
//             return true
//         }
//     })
//     return test
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
  
// function fiveCharactersOrFewerOnly(arr) {
//     const test = arr.filter(function(name){
//         if(name.length <= 5){
//             return true
//         }
//     })
//     return test
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  
// function peopleWhoBelongToTheIlluminati(arr){
//     let test = arr.filter(function(people){
//         if(people.member === true){
//             return true
//         }
//     })
//     return test
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
//   // =>
//   //[ { name: 'Angelina Jolie', member: true },
//   //  { name: 'Paris Hilton', member: true },
//   //  { name: 'Bob Ziroll', member: true } ]

function ofAge(arr){
    let test = arr.filter(people => people.age >= 18)
    return test
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
  