var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0

for( i = 0; i < officeItems.length; i++){
    if (officeItems[i] === "computer"){
            count +=1
    }

}

console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for ( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to watch Mad Max, let him in!")}

        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ){
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " she is old enough to watch Mad Max")}

        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " sadly he is not old enough to watch Mad Max")
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to watch Mad Max, she can't watch the it unfortunately")
    }}


var lightBtn = [ 2 , 3 , 2]

let startingPoint = 0

for ( let i = 0; i < lightBtn.length; i++){
     startingPoint += lightBtn[i]
}
console.log(startingPoint)

if (startingPoint %2 ===0){
    console.log("the light switch is off")
}
else if( startingPoint %2 != 0){
    console.log("the light switch is on")
}


    