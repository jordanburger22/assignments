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
    newDiv.className = "button"

    remove.addEventListener("click", function (){
        // let listItem = this.parentNode;
        //   let list = listItem.parentNode;        
        //   list.removeChild(listItem);
        newDiv.remove()
    })
    
    var saveBtn = document.createElement ('button')
    
    var inputBox = document.createElement ('input')
    
    saveBtn.textContent = "Save"
    
    edit.addEventListener("click" , function(){
        newDiv.append(inputBox)
        inputBox.value = listItem.textContent
        newDiv.append(saveBtn)
    })

    saveBtn.addEventListener ("click", function (){
        listItem.textContent = inputBox.value
        inputBox.remove()
        saveBtn.remove()
    })

})
