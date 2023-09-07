const USER = require('../models/user');
const {getUser} = require('../services/users');
const checkAuthUser = async(req,res,next)=>{
    let token = req.cookies.token;
    console.log('checkAuthUser id1',token);
    let user = getUser(token);
console.log('user',user);
    if(!user){
        return res.render('pages/login');
    }else{
        return  next();
    }
   
}

const checkAuthUserSilent = async(req,res,next)=>{
    let token = req.cookies.token;
    console.log('checkAuthUser id2',token);
    let user = getUser(token);
  
    if(user){
       return next();
    }
}

const checkAuthUserForLoginSignup = async(req,res,next)=>{
    let token = req.cookies?.token;
    
    console.log('checkAuthUser id3',token);
    if(token){
        let user = getUser(token);
        console.log('debug2',user,token);
        if(!user){
            res.user = user;
            return next();
        }else{
            return res.redirect('/urls');
        }
    }else{
        return next();
    }
}
module.exports = {checkAuthUser,checkAuthUserSilent,checkAuthUserForLoginSignup};