const mongoose = require('mongoose');

const contactvalue = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    }
});

const contact = mongoose.model('ContactDB',contactvalue);//contactDb is colletion defined in Database


module.exports= contact;