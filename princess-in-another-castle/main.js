class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar

    }

    setName(){
        let namePicked = Math.floor(Math.random() * 2)

        if (namePicked === 0){
            this.name = "Mario"
        } else this.name = "Luigi"
    }

    gotHit(){
        if (this.status === "Powered Up"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
        }
    }

    gotPowerUp(){
        if (this.status === "Small"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Powered Up"
        } else if (this.status === "Powered Up"){
            this.hasStar = true
        }
    }

    addCoin(){
        this.totalCoins = this.totalCoins + Number(1)
    }

    print(){
        if(this.hasStar === true){
            console.log('Congrats, you have a Star!')
        }
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}`  )
    }
}

const player1 = new Player("player1", 0 , "Big", false)

player1.setName()

function randomEvent(){
    let eventDecision = Math.floor(Math.random() * 3)

    if (eventDecision === 0){
        player1.gotHit()
    } else if (eventDecision === 1){
        player1.gotPowerUp()
    } else player1.addCoin()

    player1.print()
}

player1.print()

let timer

function runGame(){
    timer = setInterval(function(){
        if(player1.status === "Dead"){
            clearInterval(timer)
        } else randomEvent()
    }, 3000)
    
}

runGame()