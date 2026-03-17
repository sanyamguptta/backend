const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/likes.model");
const User = require("../models/user.model");

const imagekit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

/**
 * @route POST  -> /api/posts   [protected]
 * @descrption -> create apost with the content and images
 */
async function createPostController(req, res) {
  // file from the postman will be recieved at server in rew.file
  console.log(req.body, req.file);

  // this code takes the file towards the server / upload file to the imagekit
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    // folder: "cohort-2-insta-clone-posts",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imgURL: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });

  // res.send(file);
}

/**
 * @route GET -> /api/posts   [protected]
 * @descrption -> Gets all the posts created by the user which have requested
 */
async function getPostController(req, res) {
  let userID = req.user.id;

  // running query, for finding all post which are created by the requested user
  let post = await postModel.find({
    user: userID,
  });

  res.status(201).json({
    message: "Posts fetched successfully!",
    post,
  });
}

/**
 * @route GET  -> /api/posts/details
 * @descrption -> returns a detail about specific post with the id
 */
async function getPostDetailsController(req, res) {
  let userID = req.user.id;
  let postID = req.params.postId;

  let post = await postModel.findById(postID);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  // check if post found is the one which is created by the user who has requested
  let isValidPost = post.user.toString() === userID;
  if (!isValidPost) {
    return res.status(403).json({
      message: "Forbidden Content",
    });
  }

  // agar yaha aagye, mtlb jis post ki details ki req jis user ne ki h, ussi user ne post create ki h
  return res.status(200).json({
    message: "Post fetched successfully!",
    post,
  });
}

/**
 * @route POST -> /api/posts/like/:postid
 * @descrption -> Like a post from the id provided in the req.params
 */
async function likePostController(req, res) {
  //
  const username = req.user.username;
  const postId = req.params.postid;

  // checking if post exits or not for liking it
  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found!",
    });
  }

  // creating record for post like
  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(200).json({
    message: "Post liked successfully!",
    like,
  });
}

/**
 * @route GET ->
 */
async function getFeedController(req, res) {
  // getting username of the user who has requested for feed from the middleware which is stored in req.username
  const user = req.user;

  // finding all posts created in the DB
  const arrOfPosts = await postModel.find().populate("user").lean();
  const posts = await Promise.all(
    arrOfPosts.map(async (post) => {
      /**
       * @typeof post -> mongoooseObject
       * we convert it to normal JS object using .lean() method, because we can't add new property in mongoose object, but we can add new property in normal JS object
       */

      // finding if the post is liked by the user who has requested for feed
      const isLiked = await likeModel.findOne({
        user: user.username,
        post: post._id,
      });

      // adding new property in post which is isLiked, which will be true if the post is liked by the user who has requested for feed, otherwise false
      post.isLiked = !!isLiked; // boolean value

      // returning post with new property isLiked
      return post;
    }),
  );

  // sending response with all posts with new property isLiked
  res.status(200).json({
    message: "Fetched all posts successfully!",
    posts,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  getFeedController,
};
