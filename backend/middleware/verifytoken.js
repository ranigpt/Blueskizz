const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");

const AuthenticateToken =(req,res,next)=>{

    const company_secret ='kikijkdwndefjbefbhfjwnqeuwhejwbfn72662535425hsgd';

const token = req.header('Authorization')?.split(' ')[1];

if(!token){

    return res.status(401).json({msg:"No token, authorization denied"});
}

    try{

        const decoded = jwt.verify(token,company_secret);
        console.log(decoded);
        req.user = decoded;
        next();
    }catch(e){

        res.status(401).json({msg:`Token is not valid ${e}`});
}
};

module.exports = AuthenticateToken;