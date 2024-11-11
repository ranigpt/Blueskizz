const express = require("express");
const app = express();
const Usercol = require('../models/Register');
const crypto = require('crypto');
//const validationmiddleware = require('../middleware/validationResgister');


const Signup = async(req , res)=>{

    try{

        const { Name , Email , Dob ,Password} = req.body;
        const userExistes = await Usercol.find({Email: Email});

        // if(userExistes == true){

        //     return res.status(404).json({'msg':'user alredy existes!!'});
        // }


        if (userExistes.length > 0) {
            return res.status(404).json({errors:[{ msg: 'User already exists!' }]});
        }


        const hashpassword = crypto.createHash('sha256').update(Password).digest('hex');

        const newUser = new Usercol({
            Name : Name,
            Email : Email,
            Dob : Dob,
            Password : hashpassword
        })

     await newUser.save();

     res.status(200).json({
        'msg' : "you are register successfully"
     });

    }catch(error){

        res.status(500).json({errors:[{msg :`Server error: ${error.message}`}]})
    }
}


module.exports = Signup;