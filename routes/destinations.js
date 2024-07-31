var express = require('express');
var router = express.Router();
var Destination = require('../models/destinations')

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('addDestinations', { title: 'Add Destination' }); //passing value to addDestinations.ejs
});

router.post('/save', function(req, res, next){
    const destination = new Destinations(req.body);
    destination.save();
    res.redirect('/')
})









module.exports = router;
