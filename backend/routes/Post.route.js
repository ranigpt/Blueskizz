const express = require('express');
const app = express();
const router = express.Router();
const verifyToken = require('../middleware/verifytoken')


const PostController = require('../controller/PostController');

router.post('/create',verifyToken,PostController);

module.exports = router;