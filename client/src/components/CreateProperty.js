import React, { useState, useEffect } from "react";

export default function CreateProperty() {
  const [newProperty, setNewProperty] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [image_url, setImage_url] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    setReview("");
    setUser_id("");
    setProperty_id("");
  }

  <div>
    <form>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="add title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="description"
        value={description}
        placeholder="add description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        name="image_url"
        value={image_url}
        placeholder="add description"
        onChange={(e) => setImage_url(e.target.value)}
      />
    </form>
  </div>;

  return <div>create property</div>;
}
