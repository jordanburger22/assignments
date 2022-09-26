var colors = ["red", "blue", "green"]

var button = document.getElementById("add")

button.addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

var red = createElement ("option") 

function createDropDown(){
    const dropDown = document.createElement("select")
  
   
    dropDown.addEventListener("onchange", function(e){
        e.target.parent.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
   
    var subItemValue = document.getElementById("input").value
   
    subItem.textContent = subItemValue
   
    const dropDown = createDropDown()
   
    subItem.appendChild(dropDown)
   
    subItem.setAttribute("class", "subItem")
   
    return subItem
}

var blue =createElement ("option")

var green = createElement ("option")

red.append (dropDown)

blue.append (dropDown)

green.append (dropDown)

green.value = colors[2]

blue.value = colors[1]

red.value = colors [0]

red.textContent = "red"