var express = require('express');
var router = express.Router();
/*var fs = require('fs');
var terms;
fs.readFile("../restos.json", "utf8", function(err, data){
    if(err) throw err;
    terms = JSON.parse(data);
});*/

/* request for translation */
router.post('/', function(req, res) {
    var ans = req.body.word.split(",");
    ans.map(function(el) {
        el.trim();
    });
    res.status(200).json(ans);
});

module.exports = router;