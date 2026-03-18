import React, { useEffect } from "react";
import "../style/feed.scss";
import Post from "../components/post";
import { usePost } from "../hooks/usePost"; // importing custom hook
import Nav from "../../shared/components/Nav";

const Feed = () => {

  // destructuring states and functions using custom hook
  const {loading, feed, handleGetFeed } = usePost();

  // using useEffect() hook to run function whenever component 1st render
  useEffect(() => {
    handleGetFeed();
  }, []);

  // if feed is loading then show loading message
  if(loading || !feed){
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  // printing feed data
  console.log(feed);

  return (
    <main className="feed-page">
      {/* rendering Nav component */}
      <Nav />
      <div className="feed">
        {/* rendering POST component */}
        <div className="posts">
          {feed.map((post) => {
            return <Post key={post._id} user={post.user} post={post} />;
          })}
          {/* <Post /> */}
        </div>
      </div>
    </main>
  );
};

export default Feed;
