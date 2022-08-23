import React, { useEffect, useState } from "react";

function Home() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((response) => response.json())
      .then((posts) => setAllPosts(posts));
  }, []);

  const foundPosts = allPosts.map((post) => (
    <div key={post.id}>
      {post.title}
      {post.body}
    </div>
  ));
  return <div>{foundPosts}</div>;
}

export default Home;
