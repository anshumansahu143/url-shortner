var shortid  = require("shortid");

const URL = require('../models/url');

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    const shortID = shortid();
    if(!body.url){
        return res.status(400).json({error:'URL not specified'});
    }
    await URL.create({
        shortId:shortID,
        redirectUrl:body.url,
        visitHistory:[],
    });
    return res.redirect('/urls');
}

 async function getUrlAnaylitics (req,res){
    const shortId  = req.params.shortId;
    let url = await URL.findOne(
        {
            shortId:shortId
        }
    );
    if(url)return res.status(200).json(url.visitHistory.length) ;
}


async function getUrl(req,res){
    const shortId  = req.params.shortId;
    let url = await URL.findOneAndUpdate(
        {
            shortId:shortId
        },
        {
            $push:{
                visitHistory:{timestamp:Date.now(),ip:req.ip},
            }
        }
    );
    if(url)return res.redirect(url.redirectUrl) ;
}

module.exports = {
    handleGenerateNewShortUrl,
    getUrlAnaylitics,
    getUrl
};