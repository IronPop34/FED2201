import Food from "./Food.js"
import foodAjax from "./ajax.js";

var domCrud = {
    foodEntriesCreated: 0,
    listOfFoodEntries: [],

    // input fields
    nameInput: $("#nameInput"),
    cuisineInput: $("#cuisineInput"),
    temperatureInput: $("#temperatureInput"),
    ingredientsInput: $("#ingredientsInput"),

    //any other DOM elements
    submitFoodEntry: $("#submitFoodEntry"),
    foodEntriesTable: $("#foodEntriesTable tbody"),

    async submitFoodEntryFunc() {
        let name = this.nameInput.val()
        let temperature = this.temperatureInput.val()
        let ingredients = this.ingredientsInput.val()
        let cuisine = this.cuisineInput.val()

        ingredients = this.separateIngredients(ingredients)

        // addFoodDataToTable(name, temperature, ingredients, cuisine)
        let newFoodEntry = new Food(name, temperature, ingredients, cuisine)

        await foodAjax.postFoods(newFoodEntry)
        this.populateTable()

        this.nameInput.val("")
        this.temperatureInput.val("")
        this.ingredientsInput.val("")
        this.cuisineInput.val("")
    },

    separateIngredients(str) {

        //split the string into an array based on where commas are placed
        var separatedIngredients = (typeof str === "string") ? str.split(",") : console.log(`NOT a string!!!`)
        let newList = [];

        if (typeof str === "string") {

            separatedIngredients.forEach((singleIngredient) => {
                // console.log(`single ingredient: ${singleIngredient} with a type of: ${typeof singleIngredient}`)
                let trimmed = singleIngredient.trim()
                newList.push(trimmed)
            })

            // console.log(`array from newList: ${newList}`)

            return newList
        } else {
            console.log(`CANNOT run 'separateIngredients'`)
        }
    },

    async populateTable() {
        this.foodEntriesCreated = 0
        this.foodEntriesTable.html("")

        let foodData;
        // get food from API
        await foodAjax.getFoods().then((data) =>
            foodData = data
        )

        this.listOfFoodEntries = []
        for (let dataObj in foodData) {
            let ingredients
            // structure the ingredients prop to be an array
            if (typeof foodData[dataObj].ingredients === "string") {
                ingredients = foodData[dataObj].ingredients.split(", ")
            } else {
                ingredients = foodData[dataObj].ingredients
            }

            // add our data to an array that will be tracked by our JS
            this.listOfFoodEntries.push(new Food(foodData[dataObj].name, foodData[dataObj].temperature, foodData[dataObj].ingredients, foodData[dataObj].cuisine, dataObj))

            this.addFoodDataToTable(foodData[dataObj].name, foodData[dataObj].temperature, ingredients, foodData[dataObj].cuisine, dataObj)
            //end of for loop
        }
        console.log(this.listOfFoodEntries)
    },

    addFoodDataToTable(name, temperature, ingredients, cuisine, id) {
        if (typeof ingredients === "string") {
            ingredients = ingredients.split(", ")
        }
        let foodEntry = new Food(name, temperature, ingredients, cuisine, id)

        // add submitted data to table
        this.foodEntriesTable.append(`
            <tr id="foodEntry-${foodEntry.id}" data-food-entry-id=${foodEntry.id}">
                <td class="id">${++this.foodEntriesCreated}</td>
                <td class="name">${foodEntry.name}</td>
                <td class="temperature">${foodEntry.temperature}</td>
                <td class="ingredients">
                    <ul>
                    </ul>
                </td>
                <td class="cuisine">${foodEntry.cuisine}</td>
                <td>
                    <button class="deleteButton" id="delete-${foodEntry.id}" 
                    ">Delete</button>
                </td>
            </tr>
        `)

        foodEntry.ingredients.forEach(ingr => {
            $(`tr#foodEntry-${foodEntry.id} td.ingredients ul`).append(`<li>${ingr}</li>`)
        })


    }

}

export default domCrud
