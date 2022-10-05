numbers = []
const list = document.getElementById('list')
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        numbers.push("fizzbuzz")
    } else if(i % 3 === 0) {
        numbers.push("fizz")
    } else if(i % 5 === 0){
        numbers.push("buzz")
    } else{numbers.push(i)}
    
 }

 

 for (let i = 0; i < numbers.length; i++){
    let listItem = document.createElement('li')
    list.append(listItem)
    listItem.textContent = numbers[i]
 }

 list.style.listStyle = "none"

 let tally = {}

 function count (){
    
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === "fizz"){
            
        } else if (numbers[i] === "buzz"){
            
        } else if (numbers[i] === "fizzbuzz"){
            
        }
    }

    
 }
count()
 console.log(tally)