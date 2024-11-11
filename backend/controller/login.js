const User = require('../models/Register');
const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


const login = async (req,res)=>{
   const {Email,Password} = req.body;
   const company_secret ='kikijkdwndefjbefbhfjwnqeuwhejwbfn72662535425hsgd';

   try{

        const user = await User.findOne({Email});

        if(!user){
         return res.status(400).json({errors:[{msg:"user does not exist !! please register first .."}]});
        }

        
        const hashedPassword = crypto.createHash('sha256').update(Password).digest('hex');

        if(user.Password!==  hashedPassword){
          
          return res.status(400).json({errors:[{msg:"email or password is incorrect"}]});
 
        }

        const token = jwt.sign(
          {
            id: User.id,
            email : User.Email,
            
          },
          company_secret,
          {
            expiresIn: 36000000,
          }
        )

        //console.log(token);
        return res.status(200).json({msg:"you are login successfully",token:token});
   }catch(e){
     
    return res.status(500).json({errors:[{msg:`Server error ${e}`}]});

   }
    
}

module.exports = login;