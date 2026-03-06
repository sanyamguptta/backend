const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
// multer provide express with powers, to read files (img) coming from frontend to server
const multer = require('multer')
// memoryStorage is used for storing file for temporary purpose
const upload = multer({storage: multer.memoryStorage() })

// POST /api/post/   [protected]
// for creating post (identifying which user is requesting, is handled in controller only)
postRouter.post('/', upload.single("img"), postController.createPostController);


// GET -> /api/post/  [protected]
// returns all posts which are created by the user, (identifying which user is requesting, is handled in controller only)
postRouter.get('/', postController.getPostController);

// GET -> /api/post/details/:postid
// return an detail about specific post with the id. also check whether this post belongs to the user that the requested about the post, (identifying which user is requesting, is handled in controller only)
postRouter.get('/details/:postId', postController.getPostDetailsController);



module.exports = postRouter;
