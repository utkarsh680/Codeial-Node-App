const express = require('express');
const router = express.Router();

const passport = require('passport');
const usersController = require('../controllers/user_controller')

router.get('/profile',passport.checkAuthentication, usersController.profile)

router.get('/sign-up', usersController.signUp)

router.get('/sign-in', usersController.signIn)

router.post('/create', usersController.create)

// user passport as a middleware ot aunthenticate
router.post('/create-session',
passport.authenticate(
    'local',
    {failureRedirect:'/sign-in'}
), usersController.createSession)

router.get('/sign-out', usersController.destroySession);


module.exports = router;