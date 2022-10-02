var employees = []

function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary
    this.status = "Full Time"
    //this.printEmployeeForm = console.log (this)
    }



var jordan = new Employee("Jordan", "Developer", "$80,000 /year" )

var ryan = new Employee("Ryan", "Scuba Instructor", "$60,000 /year")
ryan.status = "Contract"

var shanna = new Employee("Shanna", "Massage Therapist", "$75,000 /year")


employees.push(jordan)
employees.push(ryan)
employees.push(shanna)
console.log(employees)

