const express = require('express');
const mongoose = require('mongoose');

const PostDetails = mongoose.Schema({

    PostDescription:{
        type:String,
    },

    PostImage:{
        type:String,
    },

    User_Id :{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
});

const Post = mongoose.model('Post',PostDetails);

module.exports = Post;