const express = require('express');

const router = express.Router();

const {getAllUrls} = require('../controllers/home');

router.get('/',getAllUrls);




module.exports = router;