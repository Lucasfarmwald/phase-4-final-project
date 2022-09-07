import React, { useState, useEffect } from "react";

export default function Properties({ createNewReviews }) {
  const [properties, setProperties] = useState([]);
  const [review, setReview] = useState("");
  const [user_id, setUser_id] = useState("");
  const [property_id, setProperty_id] = useState("");

  useEffect(() => {
    fetch("/properties")
      .then((response) => response.json())
      .then((properties) => setProperties(properties));
  }, []);

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  }

  function handleSubmit() {
    const body = { review: review, user_id: user_id, property_id: property_id };

    fetch("/reviews", {
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

  const foundProperties = properties.map((p) => (
    <div key={p.id} className="property">
      <img src={p.image_url} alt="pic of house" />
      <h1>{p.title}</h1>
      <h2>{p.description}</h2>
      <h2>{p.address}</h2>
      <h2>
        {p.reviews.map((rv) => (
          <div>
            <li>{rv.review}</li>
            <button onClick={() => handleDelete(rv.id)}>Delete</button>
          </div>
        ))}
      </h2>
      <p>
        <span>Property Id</span> : {p.id}
      </p>
    </div>
  ));

  return (
    <div>
      <div className="review">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={review}
            placeholder="review"
            autoFocus={true}
            onChange={(e) => setReview(e.target.value)}
          ></input>
          <input
            type="text"
            value={user_id}
            placeholder="user id"
            autoFocus={true}
            onChange={(e) => setUser_id(e.target.value)}
          ></input>
          <input
            type="text"
            value={property_id}
            placeholder="property id"
            autoFocus={true}
            onChange={(e) => setProperty_id(e.target.value)}
          ></input>
          <button type="submit">Create new review</button>
        </form>
      </div>
      <div>{foundProperties}</div>
    </div>
  );
}
