import deleteEvent from "./eventListeners.js";
import foodAjax from "./ajax.js";
import domCrud from "./domCrud.js"

// var foodEntriesCreated = 0;
// var listOfFoodEntries = []

$(document).ready(() => {
    // food objects
    // name, temperature, ingredients [], cuisine, id

    // input fields
    var nameInput = $("#nameInput")
    var cuisineInput = $("#cuisineInput")
    var temperatureInput = $("#temperatureInput")
    var ingredientsInput = $("#ingredientsInput")

    //any other DOM elements
    var submitFoodEntry = $("#submitFoodEntry")
    var foodEntriesTable = $("#foodEntriesTable tbody")

    class Food {
        constructor(name, temperature, ingredients, cuisine, id) {
            this.name = name;
            this.temperature = temperature;
            this.ingredients = ingredients; // will be an array
            this.cuisine = cuisine;
            this.id = id || ++foodEntriesCreated
        }
    };

    // function separateIngredients(str) {

    //     //split the string into an array based on where commas are placed
    //     var separatedIngredients = (typeof str === "string") ? str.split(",") : console.log(`NOT a string!!!`)
    //     let newList = [];

    //     if (typeof str === "string") {

    //         separatedIngredients.forEach((singleIngredient) => {
    //             // console.log(`single ingredient: ${singleIngredient} with a type of: ${typeof singleIngredient}`)
    //             let trimmed = singleIngredient.trim()
    //             newList.push(trimmed)
    //         })

    //         // console.log(`array from newList: ${newList}`)

    //         return newList
    //     } else {
    //         console.log(`CANNOT run 'separateIngredients'`)
    //     }
    // }

    // Events MIGHT need to be before the jQuery actually creates any DOM elements
    var deleteButtons = $(".deleteButton")

    deleteButtons.click(() => {console.log(`A DELETE button has been pressed`)})


    // const submitFoodEntryFunc = () => {
    //     let name = nameInput.val()
    //     let temperature = temperatureInput.val()
    //     let ingredients = ingredientsInput.val()
    //     let cuisine = cuisineInput.val()
        
    //     ingredients = separateIngredients(ingredients)
        
    //     // addFoodDataToTable(name, temperature, ingredients, cuisine)
    //     let newFoodEntry = new Food(name, temperature, ingredients, cuisine)
        
    //     foodAjax.postFoods(newFoodEntry)
    //     populateTable()

    //     name = nameInput.val("")
    //     temperature = temperatureInput.val("")
    //     ingredients = ingredientsInput.val("")
    //     cuisine = cuisineInput.val("")

    // }

    submitFoodEntry.click(function (e) {
        e.preventDefault()
        console.log("Button pressed!")

        domCrud.submitFoodEntryFunc()
    })

    
    // // populate table with data from API
    // async function populateTable() {
        
    //     let foodData;
    //     // get food from API
    //     await foodAjax.getFoods().then((data) =>
    //         foodData = data
    //     )

    //     for (let dataObj in foodData) {
    //         let ingredients
    //         // structure the ingredients prop to be an array
    //         if (typeof foodData[dataObj].ingredients === "string") {
    //             ingredients = foodData[dataObj].ingredients.split(", ")
    //         } else {
    //             ingredients = foodData[dataObj].ingredients
    //         }

    //         // add our data to an array that will be tracked by our JS
    //         listOfFoodEntries.push(new Food (foodData[dataObj].name, foodData[dataObj].temperature, foodData[dataObj].ingredients, foodData[dataObj].cuisine, dataObj))

    //         addFoodDataToTable(foodData[dataObj].name, foodData[dataObj].temperature, ingredients, foodData[dataObj].cuisine, dataObj)
    //         //end of for loop
    //     }
    //     console.log(listOfFoodEntries)
    // }

    

    // function that will automatically add food entry data to our table
    // function addFoodDataToTable(name, temperature, ingredients, cuisine, id) {
    //     if (typeof ingredients === "string") {
    //         ingredients = ingredients.split(", ")
    //     }
    //     let foodEntry = new Food(name, temperature, ingredients, cuisine, id)

    //     // add submitted data to table
    //     foodEntriesTable.append(`
    //         <tr id="foodEntry-${foodEntry.id}" data-food-entry-id=${foodEntry.id}">
    //             <td class="id">${++foodEntriesCreated}</td>
    //             <td class="name">${foodEntry.name}</td>
    //             <td class="temperature">${foodEntry.temperature}</td>
    //             <td class="ingredients">
    //                 <ul>
    //                 </ul>
    //             </td>
    //             <td class="cuisine">${foodEntry.cuisine}</td>
    //             <td>
    //                 <button class="deleteButton" id="delete-${foodEntry.id}" 
    //                 ">Delete</button>
    //             </td>
    //         </tr>
    //     `)

    //     foodEntry.ingredients.forEach(ingr => {
    //         $(`tr#foodEntry-${foodEntry.id} td.ingredients ul`).append(`<li>${ingr}</li>`)
    //     })


    // }
    // let deleteButtons = $(".deleteButton")

    // deleteButtons.click(() => {deleteEvent.deleteFoodEntry()})

    for (let i = 0; i < deleteButtons.length; i++) {
        console.log(deleteButtons[i].getAttribute("id"))
    }

    // DELETE food entry from table an DB
    function deleteFoodEntry() {
        // $.delete(foodEntry.id)
        console.log(`will delete something`)
    }

    domCrud.populateTable()

    // foodAjax.deleteFoods("-MvdnF3rvQzUW7vNMgv5")

   // foodAjax.deleteFoods("-MvdnF3rvQzUW7vNMgv5")

    foodAjax.updateFoods("-Mvdmg0YLDiWQmYqP9tq", JSON.stringify({
        name: "HAMBURGER",
        temperature: "HOT",
        cuisine: "AMERICAN",
        ingredients: "bread, hamburger,  lettuce, tomato, ketchup"
    }))

    
})