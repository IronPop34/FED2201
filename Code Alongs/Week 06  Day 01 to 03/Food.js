export default class Food {
    constructor(name, temperature, ingredients, cuisine, id) {
        this.name = name;
        this.temperature = temperature;
        this.ingredients = ingredients; // will be an array
        this.cuisine = cuisine;
        this.id = id
    }
};
