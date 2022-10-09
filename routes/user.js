const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/profile',userController.profile);
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
//we are posting the form hence we wil use post method and method is post on user_sign_in
//router.get('/create/createSignUp',userController.create);
router.post('/user/create',userController.create);

module.exports=router;

