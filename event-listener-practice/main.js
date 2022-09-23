var square = document.getElementById ( 'square' )


function blue () {
    square.style.backgroundColor = "blue"
}

function red () {
    square.style.backgroundColor = "red"
}

function yellow () {
    square.style.backgroundColor = "yellow"
}

function green () {
    square.style.backgroundColor = "green"
}

function orange () {
    square.style.backgroundColor = "orange"
}

square.addEventListener ('mousedown', red )

square.addEventListener ('mouseover' , blue )

square.addEventListener ('mouseup' , yellow) 

square.addEventListener ( 'dblclick', green)

document.addEventListener ( 'wheel' , orange )



document.addEventListener ('keypress', workplease )

function workplease (e) {
    var key = e.key
    var color = {
        b : 'blue', 
        r : 'red',
        y : 'yellow',
        g : 'green',
        o : 'orange'
    }
    square.style.backgroundColor = color[key]
}