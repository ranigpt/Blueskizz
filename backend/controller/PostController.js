 const PostModel = require('../models/PostData');


 const PostController = async (req , res)=>{

    try{

        console.log("postcontroleer");
        console.log(req.user._id);
    const {PostDescription, PostImage } = req.body;



    const newPost = new PostModel({
        PostDescription,
        PostImage,
        User_Id :req.user.id
    })

    await newPost.save();

    res.status(200).json({
        msg : "Post Uploded successfully"
    })

} catch(errors){
    res.status(400).json({errors : `Error while uploading the Post ! ${errors}`});
}
}

module.exports = PostController