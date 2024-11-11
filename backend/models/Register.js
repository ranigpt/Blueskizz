const mongoose = require('mongoose');

const registerUser =mongoose.Schema ({

    Name:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },

    Dob:{
        type:Date,
        required:true
    },

    Password:{
        type:String,
        required:true,
    },

    

   
});

const Userdata = mongoose.model('User',registerUser);

module.exports =  Userdata;
    
