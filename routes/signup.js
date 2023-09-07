const express = require('express');

const router = express.Router();

const {handleGenerateUser} = require('../controllers/user');

router.get('/',(req,res)=>{
    res.render('./pages/signup');
});

router.post('/',handleGenerateUser);


module.exports = router;