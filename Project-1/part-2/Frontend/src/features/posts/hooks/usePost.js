// hook layer -> for managuing states and functions related to posts
import { createPost, getFeed } from "../services/post.api"; // importing getFeed() function to call it inside custom hook
import { useContext } from "react"; // importing useContext() hook to use context API in custom hook
import { PostContext } from "../post.context"; // importing PostContext to use it inside custom hook

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  // creating function to call getFeed() function and set feed data in state variable
  const handleGetFeed = async () => {
    setLoading(true);
    // calling getFeed() function
    const data = await getFeed();
    console.log(data);
    setFeed(data.posts);
    setLoading(false);
  };

  // creating function to call handleCreatePost() function and set post data in state variable
  const handleCreatePost = async (imageFile, caption) => {
    setLoading(true);
    // calling createPost() function to send image file and caption to backend and get post data in response, and then we will set post data in post state variable
    const data = await createPost(imageFile, caption);
    // setPost(data.post.reverse());
    setPost(data.posts);
    setLoading(false);
  };

  //creating function to call likePost() function and set post data in state variable
  const handleLike = asymc (postId) => {

    setLoading(true);
    // calling likePost() function to send post id to backend and get post data in response, and then we will set post data in post state variable
    const data = await likePost(postId);
    setLosading(false);
  }

  //creating function to call unlikePost() function and set post data in state variable
  const handleUnlike = async (postId) => {
    setLoading(true);
    // calling unlikePost() function to send post id to backend and get post data in response, and then we will set post data in post state variable
    const data = await unlikePost(postId);
    setLoading(false);
  }




  // returning states and functions as object to use in components
  return { feed, post, loading, handleGetFeed, handleCreatePost, handleLike, handleUnlike };
};
