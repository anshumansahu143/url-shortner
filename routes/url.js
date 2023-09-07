const express = require('express');

const router = express.Router();

const {handleGenerateNewShortUrl,getUrlAnaylitics,getUrl} = require('../controllers/url');

router.get('/analyitics/:shortId',getUrlAnaylitics);

router.post('/',handleGenerateNewShortUrl);

router.get('/:shortId',getUrl);


module.exports = router;