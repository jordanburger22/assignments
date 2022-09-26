var colors = ["red", "blue", "green"]

var button = document.getElementById("add")

button.addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    var choice = document.createElement("option")
    var choice2 = document.createElement("option")
    var choice3 = document.createElement("option")
    
    for ( let i = 0; i < colors.length ; i++ ) {
    choice.textContent = colors[0]
    choice2.textContent = colors[1]
    choice3.textContent = colors[2]
    }
    
    dropDown.append(choice)
    dropDown.append(choice2)
    dropDown.append(choice3)

        
    dropDown.addEventListener('change', function colorChange () {
        for (let i = 0; i < subItem.length; i++) {
        if (dropDown.value === 'red') {
            dropDown.parentElement.style.backgroundColor = "red"
        }
        else if (dropDown.value === 'blue') {
            dropDown.parentElement.style.backgroundColor = "blue"
        }
        else if (dropDown.value === 'green') {
            dropDown.parentElement.style.backgroundColor = "green"
    }}
        console.dir(dropDown)
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
   
    var subItemValue = document.getElementById("input").value
    document.getElementById("input").value = ""
    subItem.textContent = subItemValue
   
    const dropDown = createDropDown ()
   
    subItem.appendChild(dropDown)

    subItem.setAttribute("class", "subItem")
   
    return subItem

}

var subItem = document.getElementsByClassName ('subItem')


