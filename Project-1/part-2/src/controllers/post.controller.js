const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});


async function createPostController(req, res) {
  // file from the postman will be recieved at server in rew.file
  console.log(req.body, req.file);

  // taking stored token value from cookie into variable
  const token = req.cookies.token;

  // if token not exists, then return directly
  if (!token) {
    return res.status(401).json({
      message: "Token not provided, unauthorized access",
    });
  }

  let decoded = null;

  try {
    // verifying if token is valid or not
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "user not authenticated"
    });
  }

  console.log(decoded);

  // this code takes the file towards the server / upload file to the imagekit
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    // folder: "cohort-2-insta-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgURL: file.url,
    user: decoded.id
  })

  res.status(201).json({
    message: 'Post created successfully',
    post
  })

  // res.send(file);

}

async function getPostController(req, res) {

  //
  const token = req.cookies.token

  if(!token) {
    return res.status(401).json({
      message: 'Token invalid, unauthorized access'
    })
  }

  // yaha aagye mtlb token available
  let decoded;

  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  }
  catch(err) {
    return res.status(401).json({
      message: 'Token invalid!'
    })
  }

  // yaha ho toh mltb token mei data h
  let userID = decoded.id;

  // running query, for finding all post which are created by the requested user
  let post = await postModel.find({
    user: userID
  })

  res.status(201).json({
    message: 'Posts fetched successfully!',
    post
  })

}

async function getPostDetailsController(req, res) {

  //
  let token = req.cookies.token;

  if(!token) {
    return res.status(401).json({
      message: 'Token invalid, unauthorized access!'
    })
  }

  // check token, if it is valid or not 
  let decoded = null;
  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  }
  catch(err) {
    return res.status(401).json({
      message: 'Invalid Token'
    })
  }

  let userID = decoded.id;
  let postID = req.params.postId;

  let post = await postModel.findById(postID);

  if(!post) {
    return res.status(404).json({
      message: 'Post not found'
    })
  }

  // check if post found is the one which is created by the user who has requested
  let isValidPost = post.user.toString() === userID;
  if(!isValidPost) {
    return res.status(403).json({
      message: 'Fprbidden Content'
    })
  }

  // agar yaha aagye, mtlb jis post ki details ki req jis user ne ki h, ussi user ne post create ki h
  return res.status(200).json({
    message: 'Post fetched successfully!',
    post
  })

}




module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController
};
