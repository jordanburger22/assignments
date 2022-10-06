var readlineSync = require('readline-sync');

readlineSync.question("Welcome Hero! We are in dire need of you assistance. The forest nearby has become overrun with monsters ")

let username = readlineSync.question("What is your name Hero? ")
enemyInteractChoices = ["run ", "fight "]
rewards = ["shield", "flaming sword rune", "obsidian armor piece", "crossbow", "enchanted necklace"]

let hero = {
    name: username,
    hp: 100,
    attackPower: 25,
    monstersDefeated: 0
}

let minotaur = {
    name: "Minotaur",
    hp: 200,
    attackPower: 20
}

let orc = {
    name: "Orc",
    hp: 150,
    attackPower: 15
}

let wolf = {
    name: "Wolf",
    hp: 100,
    attackPower: 10
}

let giant = {
    name: "Giant",
    hp: 500,
    attackPower: 99
}

let enemy = {
    name: "placeholder",
    hp: 1,
    attackPower: 1
}
let inventory = [" Sword "]

if (readlineSync.keyInYN("Will you help us " +username)){
    console.log("Thank you Hero! ")
    readlineSync.question("Just make sure you watch out for the giant, none have survived his wrath ")  
    walk()
} else {
    console.log("The villager stabs you with his pitchfork. Game Over! ")
    hero.hp = 0
}


while(hero.hp > 0 && hero.monstersDefeated < 10){
    walk()
}

if (hero.monstersDefeated > 9){
    console.log("You have cleared the forest enough to keep the village safe! Congrats you win!")
}

function walk() {
    var move = readlineSync.question("Press 'w' to walk forward or 'p' to see Hero's inventory ")
        if(move === "w"){
            readlineSync.question("You move further into the forest ")
            enemyAppearance()
        } else if(move === "p"){
            console.log(hero.name + "\n HP=",hero.hp + "\n Inventory:", inventory )
            console.log("Attack Power:", + hero.attackPower) 
            console.log("Monsters Defeated:", + hero.monstersDefeated)
        }
    
}

function enemyAppearance(){
    var enemyChance = Math.floor(Math.random() * 101)
    if (enemyChance < 35 && enemyChance > 25){
        readlineSync.question("A Wolf Appears!")
        enemy.name = wolf.name
        enemy.hp = wolf.hp
        enemy.attackPower = wolf.attackPower
        fightChoice()
    } else if(enemyChance < 25 && enemyChance > 18){
        readlineSync.question("A Orc Appears!")
        enemy.name = orc.name
        enemy.hp = orc.hp
        enemy.attackPower = orc.attackPower
        fightChoice()
    } else if(enemyChance < 18 && enemyChance > 3){
        readlineSync.question("A Minotaur Appears!")
        enemy.name = minotaur.name
        enemy.hp = minotaur.hp
        enemy.attackPower = minotaur.attackPower
        fightChoice()
    } else if(enemyChance < 3){
        readlineSync.question("The Giant comes lumbering through the forest knocking over everything in its path!!")
        enemy.name = giant.name
        enemy.hp = giant.hp
        enemy.attackPower = giant.attackPower
        fightChoice()
    }
}



function fightChoice(){
    var choice = readlineSync.keyInSelect(enemyInteractChoices, "What do you decide to do?")
    if (choice === 0){
        run()
    } else if(choice === 1) {
        fight()
}}

function run(){
    var runChance = Math.floor(Math.random() * 101)
    if(runChance > 50){
        readlineSync.question("You escape the encounter!")
    } else if(runChance < 49) {
        readlineSync.question( "You cant escape the enemy, no choice but to fight!")
    fight()
}}


function fight(){
    while( enemy.hp > 0 && hero.hp > 0){
        
        let heroAttackPower = Math.floor(Math.random() * hero.attackPower) + 10
        console.log( "The ", enemy.name , " charges you ")
        console.log( "You attack the ", enemy.name, " causing ", heroAttackPower, " damage! ")
        enemy.hp = enemy.hp - heroAttackPower
        console.log(enemy.hp)
       
        let enemyHitChance = Math.floor(Math.random() * 101) 
        if(enemyHitChance < 50){
            console.log("The ", enemy.name, " attacks you causing ", enemy.attackPower, " damage! ")
            hero.hp = hero.hp - enemy.attackPower
        } else { 
            console.log("the enemy missed its attack!")
        }
        console.log(hero.hp)
        if (enemy.hp > 0 && hero.hp > 0){
            readlineSync.question("The enemy attacks again! ")
        }  else if(enemy.hp <= 0 && hero.hp > 0) {
            readlineSync.question("You have defeated the enemy! ")
            readlineSync.question("You find a strange potion on the defeated enemy, after consuming it your hp goes up 50 ")
            readlineSync.question("You also find a an odd piece of gear, and put it in your inventory")
            randomReward = Math.floor(Math.random() * 4) 
            inventory.push(rewards[randomReward])
            buff()
            hero.hp = hero.hp + 50
            hero.monstersDefeated = hero.monstersDefeated +1
        } else {
            readlineSync.question("You have lost the battle, dying alone in the forest! ")
        }
        
    }
} 

function buff(){
    if (inventory.includes('shield')){
        hero.hp = hero.hp + 50
}

    if (inventory.includes('obsidian armor piece')){
     hero.hp = hero.hp + 100
}

    if (inventory.includes("flaming sword rune")){
        hero.attackPower = hero.attackPower + 50
}
    if (inventory.includes("crossbow")){
        hero.attackPower = hero.attackPower + 10
}
    if (inventory.includes('enchated necklace')){
        hero.hp = hero.hp + 50
        hero.attackPower = hero.attackPower + 50
}
}