const add = document.add
const sub = document.sub
const multiply = document.multiply
const firstDiv = document.getElementById('firstDiv')
const secondDiv = document.getElementById("secondDiv")
const thirdDiv = document.getElementById("thirdDiv")


add.addEventListener("submit", function(e){
    e.preventDefault()
    let result = Number(add.addnum1.value) + Number(add.addnum2.value)
    console.log(result)
    firstDiv.append(result)
})

sub.addEventListener("submit" , function(e){
    e.preventDefault()
    let result = sub.subnum1.value - sub.subnum2.value
    secondDiv.append(result)

})

multiply.addEventListener("submit", function(e){
    e.preventDefault()
    let result = multiply.multiplynum1.value * multiply.multiplynum2.value
    thirdDiv.append(result)
})