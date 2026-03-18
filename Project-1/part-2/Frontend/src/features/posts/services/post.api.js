import axios from "axios";
// import { useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});


// function to get feed data from backend, and we will use this function in post.context.jsx file to get feed data and set it in feed state, and then we will use feed state in Feed.jsx file to render the feed data
export async function getFeed() {
  const response = await api.get("/api/posts/feed");
  // console.log("response from post.api.js", response);
  return response.data;
}

export async function createPost(imageFile, caption) {

  // we cannot send file directly from frontend using axios, so we need to create form data and send it to backend, and in backend we will use multer to handle the file upload

  // creating form data to send image file and caption to backend
  const formData = new FormData();
  formData.append('img', imageFile);
  formData.append('caption', caption);

  // sending form data to backend using axios
  const response = await api.post('/api/posts/', formData);
  return response.data;

}

// function to like a post, and we will use this function in Post.jsx file to like a post when user clicks on like button
export async function likePost(postId) {
  const response = await api.post('/api/posts/like/'+postId);
  return response.data;
}

// function to unlike a post, and we will use this function in Post.jsx file to unlike a post when user clicks on unlike button
export async function unlikePost(postId) {
  const response = await api.post('/api/posts/unlike/'+postId);
  return response.data;
}
