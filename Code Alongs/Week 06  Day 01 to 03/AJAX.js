var foodAjax = {
    dbUrl: "https://fed2201-4510b-default-rtdb.firebaseio.com",
    jsonExt: ".json",

    // GET from foods API
    async getFoods() {
        let dataFromApi;

        await $.get(`${this.dbUrl}/foods${this.jsonExt}`).then((data) => {
            console.log(data)
            dataFromApi = data
        }).then(() => console.log(`success!`))

        // console.log(`data from the API: `)
        // console.log(dataFromApi)
        return dataFromApi
    },

    // POST to foods API
    postFoods(foodObj) {
        $.post(`${this.dbUrl}/foods${this.jsonExt}`,
            JSON.stringify({
                name: foodObj.name,
                temperature: foodObj.temperature,
                ingredients: foodObj.ingredients,
                cuisine: foodObj.cuisine
            }))
    },


    // DELETE from foods API
    deleteFoods(foodObjID) {
        $.ajax({
            type: 'DELETE',
            url: `${this.dbUrl}/foods/${foodObjID}${this.jsonExt}`,
            success: console.log(`${foodObjID} successfully deleted`)
        }) 
    },
    
    // UPDATE foods API
    updateFoods(foodObjID, newFoodObj) 
    {//UPDATE structure
        $.ajax({
            type: 'PUT',
            dataType: 'json',
            url: `${this.dbUrl}/foods/${foodObjID}${this.jsonExt}`,
            data: newFoodObj,
            success: console.log(`${foodObjID} successfully edited`)
        }) 
    }
}

export default foodAjax
 
