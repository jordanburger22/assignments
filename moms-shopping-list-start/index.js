

const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    var list = document.getElementById("list")
    
    const input = form.title.value
    
    var newDiv = document.createElement("div")
   
    var listItem = document.createElement("li")
    
    listItem.textContent = input
    list.append(newDiv)
    
    newDiv.append(listItem)

    form.title.value = ""
     
    var edit = document.createElement("button")
    
    edit.textContent = "edit"

    var remove = document.createElement("button")
    remove.textContent = "X"

    newDiv.append(edit, remove)
    
    remove.setAttribute( "class", "button")
    edit.setAttribute( "class", "button1" )
    newDiv.setAttribute("class" , "button")
})