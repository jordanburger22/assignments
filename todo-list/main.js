const listDiv = document.getElementById("list")
const inputForms = document.inputform


const completedUpdate = {
    completed: true
}

const notCompletedUpdate = {
    completed: false
}

function getList(){
    axios.get("https://api.vschool.io/jordanburger/todo")
        .then(response => displayList(response.data))
        .catch(error => console.log(error))
}


function displayList(list){

    clear()

    for(let i = 0; i < list.length; i ++){
        const newlistItemDiv = document.createElement('div')

        const listItemTitle = document.createElement('h1')
        listItemTitle.textContent = `${list[i].title}` 
        listItemTitle.setAttribute("class", "data")

        const listItemDescription = document.createElement('h1')
        listItemDescription.textContent = `${list[i].description}`
        listItemDescription.setAttribute("class", "data")

        const listItemPrice = document.createElement('h1')
        listItemPrice.textContent = `${list[i].price}`
        listItemPrice.setAttribute("class", "data")

        const listImg = document.createElement("img")
        listImg.src = list[i].imgUrl

        const completed = document.createElement("h1")
        completed.textContent = "completed"
        completed.setAttribute("class", "data")

        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")

        document.getElementById("list").appendChild(newlistItemDiv)
        newlistItemDiv.appendChild(listItemTitle)
        newlistItemDiv.appendChild(listItemDescription)
        newlistItemDiv.appendChild(listItemPrice)
        newlistItemDiv.appendChild(completed)
        completed.appendChild(checkbox)
        newlistItemDiv.appendChild(listImg)

        const id = list[i]._id

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        newlistItemDiv.appendChild(deleteBtn)

        const editBtn = document.createElement("button")
        editBtn.textContent = "Edit"
        newlistItemDiv.appendChild(editBtn)

            //styling
        newlistItemDiv.style.border = "solid black 2px"
        newlistItemDiv.style.display = "flex"
        newlistItemDiv.style.flexDirection = "column"
        newlistItemDiv.style.padding= "20px"
        newlistItemDiv.style.alignItems = "center"
        newlistItemDiv.style.backgroundColor = "lightskyblue"
        deleteBtn.style.margin = "10px"
        


            //line through completed items
        if(list[i].completed === true){
            listItemTitle.style.textDecoration = "line-through"
            checkbox.checked = true
        }

        checkbox.addEventListener('change', function(){
            if(checkbox.checked === true){
                axios.put("https://api.vschool.io/jordanburger/todo/" + id, completedUpdate)
                    .then(response => getList())
                    .catch(err => console.log(err))
            } else if (checkbox.checked === false){
                axios.put("https://api.vschool.io/jordanburger/todo/" + id, notCompletedUpdate)
                    .then(response => getList())
                    .catch(err => console.log(err))
            }
        })
        
        deleteBtn.addEventListener('click', function(){
            axios.delete("https://api.vschool.io/jordanburger/todo/" + id)
                .then(response => getList())
                .catch(err => console.log(err))
        })

        editBtn.addEventListener('click', function(){
            listItemTitle.remove(this)
            listItemPrice.remove(this)
            listItemDescription.remove(this)
            listImg.remove(this)

            const imgEdit = document.createElement("input")
            imgEdit.value = listImg.src
            newlistItemDiv.prepend(imgEdit)
            imgEdit.setAttribute("class", "editInput")

            const priceEdit = document.createElement("input")
            priceEdit.value = listItemPrice.textContent
            newlistItemDiv.prepend(priceEdit)
            priceEdit.setAttribute("class", "editInput")

            const descriptionEdit = document.createElement("input")
            descriptionEdit.value = listItemDescription.textContent
            newlistItemDiv.prepend(descriptionEdit)
            descriptionEdit.setAttribute("class", "editInput")

            const titleEdit = document.createElement("input")
            titleEdit.value = listItemTitle.textContent
            newlistItemDiv.prepend(titleEdit)
            titleEdit.setAttribute("class", "editInput")

            editBtn.remove(this)
            const saveBtn = document.createElement("button")
            saveBtn.textContent = "Save"
            newlistItemDiv.appendChild(saveBtn)
           
            saveBtn.addEventListener("click", function(){

                const updatedInfo = {
                    title: titleEdit.value,
                    description: descriptionEdit.value,
                    price: priceEdit.value,
                    imgUrl: imgEdit.value
                }

                console.log(updatedInfo)

                axios.put("https://api.vschool.io/jordanburger/todo/" + id, updatedInfo)
                    .then(response => getList())
                    .catch(err => console.log(err))

                priceEdit.remove(this)
                imgEdit.remove(this)
                descriptionEdit.remove(this)
                titleEdit.remove(this)

                saveBtn.remove(this)
                newlistItemDiv.appendChild(editBtn)

                
            })
        })

        
        
    }
}

getList()


function clear(){
    const listDiv =document.getElementById("list")
    while(listDiv.firstChild){
        listDiv.removeChild(listDiv.firstChild)
    }
}



inputForms.addEventListener("submit", function(e){
    e.preventDefault()

    const newListItem = {
        title: inputForms.title.value,
        description: inputForms.description.value,
        price: inputForms.price.value,
        imgUrl: inputForms.imageUrl.value
    }

    inputForms.title.value = ""
    inputForms.description.value = ""
    inputForms.price.value = ""
    inputForms.imageUrl.value = ""

    axios.post("https://api.vschool.io/jordanburger/todo", newListItem)
        .then(result => getList())
        .catch(err => console.log(err))

})

