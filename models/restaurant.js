
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//The schema for one ingredient.
var ingredientSchema = new Schema({
   ingredient: {
       type: String,
       required: true
   },
    descriptive_term: [String]
});

                    
                    
//menu element
var elementSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    nbPeople: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    labels: {
        spicy: Boolean,
        vegetarian: Boolean,
        long: Boolean
    },
    meal: {
        breakfast: Boolean,
        lunch: Boolean,
        dinner: Boolean
    },
    day: {
        monday: Boolean,
        tuesday: Boolean,
        wednesday: Boolean,
        thursday: Boolean,
        friday: Boolean,
        saturday: Boolean,
        sunday: Boolean
    },
    ingredients: [ingredientSchema]
});

//subsection
var subsectionSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    elements: [elementSchema]
});
//The schema for one section.
var sectionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    subsections: [subsectionSchema]
});
//The schema for a restaurant, which is represented by its name and its menu. Some more stuff might be needed; localisation ?
var restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    menu: [sectionSchema]
});

//create a model from the schema
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

// make this available the application
module.exports = Restaurant;