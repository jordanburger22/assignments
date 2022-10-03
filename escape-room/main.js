const readline = require("readline-sync");

const nameQuestion = readline.question("What is your name? ");

readline.question(`Welcome ${nameQuestion}, you are trapped in an escape room and have three options`)

let user = {
    name: nameQuestion,
    hasKey: false,
    isAlive: true,
 }

function gameBegin (){
const options =[ 'Hand in hole', 'Find the key', 'Open the door' ]
let option = readline.keyInSelect(options, "Choose your option")

if (options[option] === "Find the key"){
    findKey()
 } else if (options[option] === "Hand in hole"){
    handInHole()
 } else if (options[option] === "Open the door"){
    openDoor()
 }
}

gameBegin()

function handInHole () {
    user.isAlive = false
    readline.question("Something from inside the hole grabs you and pulls you in, Game Over")
}
function openDoor (){
    if (user.hasKey === false){
        readline.question("The door is locked")
        gameBegin()
    } else if (user.hasKey === true){
        readline.question("You unlock the door using the key and escape the room!")
    }
}
function findKey (){
    readline.question("you look around seeing a couple things in the room")
    let places = [ "the hole", "desk", "dresser", "rug " ]
    let search = readline.keyInSelect(places, "Where would you like to search?")
    
    if (places[search] === "the hole"){
        handInHole()
    } else if (places[search] === "desk"){
        user.hasKey = true
        readline.question("You look inside the desk and find a key")
        gameBegin()
    } else if (places[search] === "dresser"){
        readline.question("you search through the dresser drawer but find nothing")
        findKey()
    } else if (places[search] === "rug "){
        readline.question("you look under the rug, a spider jumps out scaring you but their is nothing else there")
        findKey()
    }
}

