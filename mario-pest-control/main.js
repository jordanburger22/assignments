const inputs = document.priceInput

let price = document.getElementById("price")
console.log(price.textContent)

inputs.addEventListener('submit', function(e){
    e.preventDefault() 
    price.textContent = "Total Price:"
    coinTotal = Number(inputs.goomba.value) * 5 + Number(inputs.bomb.value) * 7 + Number(inputs.fish.value) * 11
    price.textContent = price.textContent + " " + coinTotal
    inputs.goomba.value = ""
    inputs.bomb.value = ""
    inputs.fish.value = ""
})