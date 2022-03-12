// we expect to handle some type of car data
// Car {make, model, year}

// Create a list of cars
var listOfCars = []
var listOfPeople = []

// simply creat a class to handle the data structure in JS
function Car (make, model, year) {
    this.make = make, 
    this.model = model,
    this.year = year
}

// make a list of potential makes/manufacturers
var carMakers = [
    "Honda",
    "Ford",
    "Buick",
    "Nissan",
    "Toyota"
]

// GET Data from json using vanilla JS
fetch("./car-data.json")
.then (response => response.json())
.then(data => {
    console.log(data)
    listOfCars = data.cars
    listOfPeople = data.people
})

// separate the cars to their owner
// add that array of cars to now exist for the specific owner
function mapCarsToOwner () {
    // iterate through the owners
    listOfPeople.forEach((person) => {
        console.log(`person is equal to; ${person.name}`)
        person.cars = listOfCars.filter(car => person.id == car.ownerID)
       })
