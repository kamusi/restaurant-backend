var express = require('express');
var router = express.Router();

/* request for translation */
router.post('/', function(req, res) {
    var ans = req.body.word.split(",");
    ans.map(function(el) {
        el.trim();
    });
    res.status(200).json(ans);
});

module.exports = router;