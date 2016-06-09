var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Restaurant = require('../models/Restaurant');


/* request for translation */
router.post('/', function(req, res) {
    mongoose.connect('mongodb://localhost:27017/kamusi');
    var db = mongoose.connection;
    var data = req.body.restaurant;
    var restaurant_data = {
        name: data.name,
        menu: []    
    }
    data.menu.forEach(function(el) {
        var name = el.name;
    });
    db.once('open', function() {
        var restaurant = new Restaurant({
            name: data.name,
            
        })
    });
    res.status(200).json(ans);
});

module.exports = router;