import axios from "axios";
// import { useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});



export async function getFeed() {
  const response = await api.get("/api/posts/feed");
  // console.log("response from post.api.js", response);
  return response.data;
}
