const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
// multer provide express serve rwith power to read files (img) from frontend
const multer = require('multer')
// memoryStorage is used for storing file for temporary purpose
const upload = multer({storage: multer.memoryStorage() })


//  /api/post/
postRouter.post('/', upload.single("image"), postController.createPostController)

module.exports = postRouter;