const USER = require('../models/user');
const {setUser} = require('../services/users');
const bcrypt = require('bcryptjs');


var shortid  = require("shortid");
async function handleGenerateUser(req,res){
    let {name,email,password} = req.body;
    password  = await bcrypt.hash(password, 10);
    if(!name || !name.length){
        return res.status(400).json({error:'name not specified'});
    }
    await USER.create({
        name,
        email,
        password,
    });
    //return res.status(200).json(url.visitHistory.length)
    return res.render('pages/signup',{message:'user signup now login'});
}

async function handleLoginUser(req,res){
    const {email,password} = req.body;
    console.log('debug3',email,password);

    if(!email || !email.length){
        return res.status(400).json({error:'email not specified'});
    }
    
    let users = await USER.find({
        email,
    });
    const shortID = shortid();
console.log('debug2',users);
    if(users.length && users[0] &&  (await bcrypt.compare(password, users[0].password))){
        token = setUser(users[0]);
        res.cookie('token',token);
        return res.redirect('/urls');
    }else{
        return res.render('pages/login',{message:'wrong user or password'});
    }
    //return res.status(200).json(url.visitHistory.length)
    
}

module.exports = {
    handleGenerateUser,
    handleLoginUser
};