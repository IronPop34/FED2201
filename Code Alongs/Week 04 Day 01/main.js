console.log(`Hello World!`)

// ES6 Features

// Variable Declaration
var x = 'x';
let y = 'y';

const a = {
    prop1: 1,
    prop2: "a sting"
};

function testFunc (a, b) {
    let z = 'z';
    return `first param (a):${a} \nSecond param (b):${b} \n a "var" variable (x): ${x}\n a let variable in the global scope (y): ${y} \n a let variable in the local scope (z): ${z}`
};

// console.log(`a let variable in the local scope of testFunc (z): ${z}`)

// Arrow Functions
function functionName (param1) {
    console.log(`A defined arron function with one was run!`);
}

// Callback Functions
var anArrayOfColors = [
    "red",
    "yellow",
    "green",
    "blue"
];

function putWordsInASentence (arr) {
    let newArr = arr.map(item => `The sky is ${item}.`)

    return newArr;
}

console.log(putWordsInASentence(anArrayOfColors))

// DOM Manipulation
var listOfCars = []
var submitCarButton = document.getElementById("submit-cars")

var carMakeInput = document.getElementById("car-make")
var carModelInput = document.getElementById("car-model")
var carYearInput = document.getElementById("car-year")

var carsSubmittedElement = document.getElementById("list-of-cars-submitted")

// console.dir(submitCarButton)

submitCarButton.addEventListener( "click", (event) => {
    event.preventDefault()

    //print info in the console
    console.log(`Car Information submitted: \nMake: ${carMakeInput.value}\nModel:${carModelInput.value}\nYear: ${carYearInput.value}`)
    
    // attach to some stored value
    listOfCars.push(new Car(carMakeInput.value, carModelInput.value, carYearInput.value))

    
    // add the submitted car to the OL in HTML
    // pull the innerHTML
    let existingListOfCarsHTML = carsSubmittedElement.innerHTML
    // now add in new data
    carsSubmittedElement.innerHTML  = `
    ${existingListOfCarsHTML}
    <li>
        <ul>
            <li> <strong>Year: </strong> ${carYearInput.value}</li>
            <li> <strong>Make: </strong> ${carMakeInput.value}</li>
            <li> <strong>Model: </strong> ${carModelInput.value}</li>
        </ul>
    </li>
    `

    // clear the input fields
    carMakeInput.value = ""
    carModelInput.value = ""
    carYearInput.value = ""

    // alert("Submit was clicked!")
})

// Constructor Function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}