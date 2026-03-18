import React, { useRef, useState } from "react";
import "../style/createPost.scss";
import { usePost } from "../hooks/usePost"; // importing custom hook to use handleCreatePost() function
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const postImageInputFieldRef = useRef(null);

  const navigate = useNavigate();

  const { loading, handleCreatePost } = usePost(); // using custom hook to get handleCreatePost() function

  // creating function
  async function handleSubmit(e) {
    e.preventDefault();

    // fetching the 1st file from the ref
    const file = postImageInputFieldRef.current.files[0];

    // calling handleCreatePost() function to send image file and caption to backend and get post data in response, and then we will set post data in post state variable
    await handleCreatePost(file, caption);

    // after creating post successfully navigate to home page
    navigate("/");
  }

  // if loading is true then show loading message
  if (loading) {
    return (
      <main>
        <h1>creating post....</h1>
      </main>
    );
  }

  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Create Post</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label className="post-image-label" htmlFor="postImage">
            {" "}
            Select Image
            <input
              ref={postImageInputFieldRef}
              hidden
              type="file"
              name="postImage"
              id="postImage"
            />
          </label>
          <input
            value={caption}
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
            id="caption"
            placeholder="Enter caption"
          />
          <button className="button primary-button">create post</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
