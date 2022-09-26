var header = document.getElementById ('header')

header.textContent = "JavaScript made this!!"

header.style.fontSize = "30px"

var header2 = document.createElement("span")

var header3 = document.createElement('span')

header3.textContent = "Jordan "

header.append(header3)

header2.textContent = " wrote the JavaScript"

header2.style.color = "black"

header2.style.fontSize = "20px"

//header2.style.display = "flex"

header2.style.alignItems ="center"

header2.style.flexDirection = "column"

header.style.flexDirection = "column"

header.style.alignItems = "center"

header.style.display = "flex"

header3.style.color = "peachpuff"

header3.append (header2)

var message = document.querySelectorAll(".messages > div")

for (var i = 0; i < message.length; i++) {
    message[0].textContent = "Hey you, What are you doing?"
}

for (var i = 0; i < message.length; i++) {
    message[1].textContent = "Its none of your business!"
}

for (var i = 0; i < message.length; i++) {
    message[2].textContent = "Come on, dont be like that."
}

for (var i = 0; i < message.length; i++) {
    message[3].textContent = "I'm warning you, mind your business."
}

var clearButton = document.getElementById ('clear-button')

function clear () {
    for ( var i = 0; i < message.length; i++) {
        message[i].textContent = ""
    }
}

clearButton.addEventListener ('click', clear)

var leftM = document.querySelectorAll ( ".left")

var rightM = document.querySelectorAll ( ".right")

var dropDown = document.getElementById ("theme-drop-down")

function colorChange () { 
    if (dropDown.value === 'theme-one') {
    for (let i = 0; i < leftM.length; i++) {
        leftM[i].style.backgroundColor = 'burlywood'
        rightM[i].style.backgroundColor = 'lightblue'
}}
    else if (dropDown.value === "theme-two") {
        for (let i = 0; i < leftM.length; i++) {
            leftM[i].style.backgroundColor = 'red'
            rightM[i].style.backgroundColor = 'black'
            leftM[i].style.color = 'white'
            rightM[i].style.color = 'white'
    }}
    }

//leftM.style.backgroundColor = 'red'    



dropDown.addEventListener('change', colorChange)

