import React, { useState, useEffect, useHistory } from "react";
import { Link } from "react-router-dom";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [review, setReview] = useState("");
  const [user_id, setUser_id] = useState("");
  const [property_id, setProperty_id] = useState("");
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch("/properties")
      .then((response) => response.json())
      .then((properties) => setProperties(properties));
  }, []);

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

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }

  const foundProperties = properties.map((p) => (
    <div key={p.id} className="property">
      <img src={p.image_url} alt="pic of house" />
      <Link to={`/properties/${p.id}`}>
        <h1>{p.title}</h1>
      </Link>
      <h2>{p.description}</h2>
      <h2>{p.address}</h2>
      <h2>
        {p.reviews.map((rv) => (
          <div>
            <li>{rv.review}</li>
            <button onClick={() => handleDelete(rv.id)}>Delete</button>
            <p>{errors}</p>
          </div>
        ))}
      </h2>
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
      <p>
        <span>Property Id</span> : {p.id}
      </p>
    </div>
  ));

  return (
    <div>
      <div>{foundProperties}</div>
    </div>
  );
}
