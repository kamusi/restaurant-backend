
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//The schema for one ingredient.
var ingredientSchema = new Schema({
   ingredient: {
       type: String,
       required: true
   },
    descriptive_term: {
        type: String
    }
});

//The schema for one element of the menu.
var menuElemSchema = new Schema({
    section: {
        type: String,
        required: true
    },
    subsection: {
        type: String
    },
    house_name: {
        type: String,
        required: true,
        unique: true
    },
    ingredients: [ingredientSchema]
});
//The schema for a restaurant, which is represented by its name and its menu. Some more stuff might be needed; localisation ?
var restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    menu: [menuElemSchema]
});

//create a model from the schema
var Restaurants = mongoose.model('Restaurant', restaurantSchema);

// make this available the application
module.exports = Restaurants;