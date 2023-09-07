const express = require('express');
const {handleSignUpUser} = require('./../controllers/user');
const router = express.router();

router.post('/',handleSignUpUser);

module.exports = router;