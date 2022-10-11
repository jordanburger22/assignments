// function doubleNumbers(arr){
//     let test = arr.map(function(num){
//         return num * 2
//         })
//         return test
// }
//   console.log(doubleNumbers([2, 5, 100]))

//   console.log(doubleNumbers([5, 10, 15]))

// function stringItUp(arr){
//     let test = arr.map(function(num){
//         return String(num)
//     })
//     return test
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr){
//    return arr.map(function(letter){
//     return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
//    })
//     }


  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   // Output:
//   // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//     let test = arr.map(function(user){
//         return user.name
//     })
//     return test
//     }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
//   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function readyToPutInTheDOM(arr){
    let test = arr.map(function(user){
        return "<h1>" + user.name + "</h1>" + "<h2>" + user.age + "</h2>"

    })
    return test
  }

  
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]