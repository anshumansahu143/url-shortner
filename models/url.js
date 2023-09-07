const mongoose = require('mongoose');

const urlSchema =  new mongoose.Schema(
    {
        shortId:{
            type:String,
            required:true,
            unique:true,
        },
        redirectUrl:{
            type:String,
            required:true,
        },
        user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        visitHistory:[{timestamp:{type:Number},ip:{type:String}}],

    },
    {timestamps:true}
);

const URL = mongoose.model('url',urlSchema);
module.exports = URL;