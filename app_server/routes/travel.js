var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET homepage */
router.get('/', controller.travelList);

module.exports = router;