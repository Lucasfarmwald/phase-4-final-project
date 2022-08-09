import React, { useEffect, useState } from "react";

function Home() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((posts) => setAllPosts(posts));
  }, []);

  const foundPosts = allPosts.map((post) => (
    <div>
      {post.title}
      {post.body}
    </div>
  ));
  return <div>{foundPosts}</div>;
}

export default Home;
