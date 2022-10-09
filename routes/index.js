const express = require('express');
console.log("Router loaded");
const homeController = require('../controllers/home_controller');

const router =express.Router()
router.get('/',homeController.home);

router.use('/',require('./user'));

module.exports=router;