const express = require('express');
const mongoose = require('mongoose');
const Signup = require('../controller/Signup');
const app = express();
//const { validateRegistration, handleValidationErrors } = require("../middleware/validationRegister");
const{validateRegistration,handleValidationErrors} = require('../middleware/validationResgister');


const router = express.Router();

router.post('/Signupurl' ,validateRegistration,handleValidationErrors, Signup );


module.exports = router;


