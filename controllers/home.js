var shortid  = require("shortid");

const URL = require('../models/url');


 async function getAllUrls (req,res){
    let urls = await URL.find();
    if(urls && urls.length){
        return res.render('pages/index',{urls:urls})
    }else{
        return res.render('pages/index',{urls:[]})
    };
}
module.exports = {
    getAllUrls,
};