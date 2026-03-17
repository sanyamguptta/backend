// hook layer -> for managuing states and functions related to posts
import { getFeed } from "../services/post.api";  // importing getFeed() function to call it inside custom hook
import { useContext } from "react"; // importing useContext() hook to use context API in custom hook
import { PostContext } from "../post.context"; // importing PostContext to use it inside custom hook  


export const usePost = () => {
  const context = useContext(PostContext);
  
  const { loading, setLoading, post, setPost, feed, setFeed} = context;

  // creating function to call getFeed() function and set feed data in state variable
  const handleGetFeed = async () => {
    setLoading(true);
    // calling getFeed() function
    const data = await getFeed(); 
    console.log(data);
    setFeed(data.posts);
    setLoading(false);
  };

  // returning states and functions as object to use in components
  return { feed, post,loading, handleGetFeed }; 
};
 