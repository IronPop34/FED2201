$(document).ready(() => {
    //jQuery code goes here

    // Car Constructor Function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
}
    var listOfCars = []
    
    //var submitCarButton = document.getElementById("submit-cars")
    var submitCarButton = $("#submit-cars");

    // var carMakeInput = document.getElementById("car-make")
    // var carModelInput = document.getElementById("car-model")
    // var carYearInput = document.getElementById("car-year")
    var carMakeInput = $("#car-make")
    var carModelInput = $("#car-model")
    var carYearInput = $("#car-year")

    //var carsSubmittedElement = document.getElementById("list-of-cars-submitted")
    var carsSubmittedElement = $("#list-of-cars-submitted")

    

    // console.dir(submitCarButton)

    submitCarButton.click((e) => {
        // creat an object to hold all the values
        let submittedCar = {
            make: carMakeInput.val(),
            model: carModelInput.val(),
            year: carYearInput.val()
        }
        //something happens
        e.preventDefault();
        // alert(`submit button clicked!`);

        //print the data submitted to the console
        console.log(`Car Information submitted: \nMake: ${submittedCar.make}\nModel:${submittedCar.model}\nYear: ${submittedCar.year}`)

        // attach to some stored value
        listOfCars.push(new Car(submittedCar.make, submittedCar.model, submittedCar.year))
        // confirm the change
        console.log(`Array of cars changed...`)
        console.log(listOfCars)

        // add the submitted car to the OL in HTML
        // pull the innerHTML
        let existingListOfCarsHTML = carsSubmittedElement.html()

        // now add in new data
        carsSubmittedElement.html(`
    ${existingListOfCarsHTML}
    <li>
        <ul>
            <li> <strong>Year: </strong> ${submittedCar.year}</li>
            <li> <strong>Make: </strong> ${submittedCar.make}</li>
            <li> <strong>Model: </strong> ${submittedCar.model}</li>
        </ul>
    </li>
    `)

    // clear the input fields
    carYearInput.val("")
    carMakeInput.val("")
    carModelInput.val("")
    })

    // Old-fashioned XMLHTTP Request format. Contains deprecated practices    
    //var xhttp = new XMLHttpRequest();
    //xhttp.onreadystatechange = () => {
    //    if (this.readyState == 4) {
    //        console.log(`Call was made...`)
    //        console.dir(this)            
    //     }
    // }

    // xhttp.open("GET", "car-data.json", true)
    // xhttp.send();

    // JS Fetch
    fetch("./car-data.json")
    .then (response => response.json())
    .then(data => console.log(data))
});