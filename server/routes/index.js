const express = require('express');
const indexCtrl = require('../controllers/indexController');
const user = require('./user');
const router = new express.Router();

router.get('/', indexCtrl);
router.use('/api/user', user);

module.exports = router


