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

    remove.addEventListener("click", function (){
        let listItem = this.parentNode;
          let list = listItem.parentNode;        
          list.removeChild(listItem);
    })

    edit.addEventListener("click" , function(){
        
        var editBox = document.createElement("input")
        
        if (edit.textContent === "edit"){
            newDiv.append(editBox)
            editBox.value = listItem.textContent
            edit.textContent = "save"
        }
       else if (edit.textContent === "save"){
            listItem.textContent = editBox.value
            edit.textContent = "edit"
            }
    })

    })
