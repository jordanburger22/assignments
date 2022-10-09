const button = document.getElementById('button')
let counter = document.getElementById('counter')
const start = document.getElementById('startBtn')
const reset = document.getElementById('resetBtn')
let timer = document.getElementById('time')






    button.addEventListener('click', function(){
        if (timer.textContent !== '0'){
        counter.textContent = Number(counter.textContent) + Number(1)
        localStorage.setItem("timesClicked" , counter.textContent)
}})


let count = localStorage.timesClicked
counter.textContent = count

reset.addEventListener('click', function(){
    timer.textContent = "30"
})


let countDown = setInterval(function(){
    timer.textContent = Number(timer.textContent) - Number(1)
    }, 1000)



function stopCountDown() {
    clearInterval(countDown)
}

setTimeout(stopCountDown , 30000)
