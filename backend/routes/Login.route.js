const express = require('express');
const app = express();
const loginfunc = require('../controller/login');
const router = express.Router();

router.post('/' , loginfunc);

module.exports = router;