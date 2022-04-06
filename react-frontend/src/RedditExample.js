import React, { useState, useEffect } from "react";
import axios from "axios";

function RedditExample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts().then((result) => {
      if (result) setPosts(result);
    });
  }, []);

  async function fetchAllPosts() {
    try {
      const resp = await axios.get(`http://www.reddit.com/r/CalPoly.json`);
      if (resp.status === 200) {
        const posts = resp.data.data.children.map((obj) => obj.data);
        return posts;
      }
      return false;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  return (
    <div>
      <h1>/r/CalPoly</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RedditExample;
