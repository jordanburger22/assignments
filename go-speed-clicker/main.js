const button = document.getElementById('button')
let counter = document.getElementById('counter')


button.addEventListener('click', function(){
    if (countContainer.textContent !== '0'){
    counter.textContent = Number(counter.textContent) + Number(1)
     localStorage.setItem("timesClicked" , counter.textContent)
}})

let count = localStorage.timesClicked
counter.textContent = count

const countContainer = document.getElementById("time");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("resetBtn");

var remainingTime = 10;

var timer;

var isStopped = true;


const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = remainingTime;
    timer = setInterval(renderTime, 1000);
  }
};


const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = 10;
  countContainer.innerHTML = remainingTime;
};

startButton.onclick = startTimer;
resetButton.onclick = resetTimer;

const renderTime = () => {
  remainingTime -= 1;
  countContainer.innerHTML = remainingTime;
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    remainingTime = 10;
  }
};