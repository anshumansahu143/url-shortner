const express = require('express');

const router = express.Router();

const {handleLoginUser} = require('../controllers/user');

router.get('/',(req,res)=>{
    res.render('./pages/login');
});

router.post('/',handleLoginUser);

module.exports = router;