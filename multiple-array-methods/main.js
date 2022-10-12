var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function test(arr){
    sorted = arr.sort(function(a , b){
        if(a.lastName < b.lastName){
            return -1
        } if (a.lastName > b.lastName){
            return 1
        } return 0 
        }) 
    sorted = arr.filter(function(num){
        if (num.age >= 18){
            return true
        }
    })
    test = sorted.reduce(function(final , user){
        final.push("<li>" + user.firstName + " " + user.lastName + " is " + user.age + "</li>")
        return final
    }, [])
    return test
}
 
 console.log(test(peopleArray))
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 //const test = arr.reduce(function(final , user){final.push("<li>" + user.firstName + " " + user.lastName + " is " + user.age + "</li>")return final
