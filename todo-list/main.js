const listDiv = document.getElementById("list")
const inputForms = document.inputform


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
        listItemTitle.textContent = `Title: ${list[i].title}` 
        const listItemDescription = document.createElement('h1')
        listItemDescription.textContent = `Description: ${list[i].description}`
        const listItemPrice = document.createElement('h1')
        listItemPrice.textContent = `Price: ${list[i].price}`
        const listImg = document.createElement("img")
        listImg.src = list[i].imgUrl
        const completed = document.createElement("h1")
        completed.textContent = "completed"
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        document.getElementById("list").appendChild(newlistItemDiv)
        newlistItemDiv.appendChild(listItemTitle)
        newlistItemDiv.appendChild(listItemDescription)
        newlistItemDiv.appendChild(listItemPrice)
        newlistItemDiv.appendChild(completed)
        completed.appendChild(checkbox)
        newlistItemDiv.appendChild(listImg)
        
            //styling
        newlistItemDiv.style.border = "solid black 2px"
        newlistItemDiv.style.display = "flex"
        newlistItemDiv.style.flexDirection = "column"
        newlistItemDiv.style.padding= "40px"
        newlistItemDiv.style.alignItems = "center"
        newlistItemDiv.style.backgroundColor = "lightskyblue"

            //line through completed items
        if(list[i].completed === true){
            listItemTitle.style.textDecoration = "line-through"
            checkbox.checked = true
        }
        

    }
}

getList()


function clear(){
    const listDiv =document.getElementById("list")
    while(listDiv.firstChild){
        listDiv.removeChild(listDiv.firstChild)
    }
}



// inputForms.addEventListener("submit", function(e){
//     e.preventDefault()

//     const newListItem = {
//         title:inputForms.title.value,
//         description:inputForms.description.value,
//         price:inputForms.price.value,
//         imageUrl:inputForms.imageUrl.value
//     }

//     axios.post("https://api.vschool.io/jordanburger/todo", newListItem)
//         .then(result => getList())
//         .catch(err => console.log(err))
// })



console.log(inputForms)