import React, { useState, useEffect } from "react";

export default function Properties({ user }) {
  const [properties, setProperties] = useState([]);

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

  const foundProperties = properties.map((p) => (
    <div className="property" key={p.id}>
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

  return <div>{foundProperties}</div>;
}
