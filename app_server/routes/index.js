var express = require('express');
var router = express.Router();
// mod2: import controller
const controller = require('../controllers/main');

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
