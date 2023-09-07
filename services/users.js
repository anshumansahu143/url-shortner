const USER = require('../models/user');
const jwt = require("jsonwebtoken");

const config = process.env;
const setUser = (data) =>{
    try{
        const token = jwt.sign(
        { user_id: data._id, email:data.email },
        config.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
        );
        // save user token
        console.log('setUSr',token);
        return token;
    }catch(err){
        console.log(err);
    }
}

const getUser = (token) =>{
    
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        console.log('decoded',decoded);
        return decoded;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {
    setUser,
    getUser
};