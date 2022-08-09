import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [name, setName] = useState("");
  const [media_url, setMedia_url] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const post = { name, media_url, price };
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="enter title"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="media_url"
          value={media_url}
          placeholder="enter body"
          onChange={(e) => setMedia_url(e.target.value)}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="enter genre"
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
