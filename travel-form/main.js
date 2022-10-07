const travelForm = document.travelForm

travelForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const diet =[]

    for (let i = 0; i < travelForm.diet.length; i++){
        if (travelForm.diet[i].checked){
            diet.push(" " + travelForm.diet[i].value)
        }
    }
    alert(
        "First Name: " + travelForm.firstName.value + 
        "\nLast Name " + travelForm.lastName.value +
        "\nAge: " + travelForm.age.value +
        "\nGender: " + travelForm.gender.value +
        "\nDestination: " + travelForm.destination.value +
        "\nDiet: " + diet 
    )
    console.log(diet)
})

