import React, { useState } from "react";

export default function EditReview({ setEditId, reviews, single, setReviews }) {
  const [review, setReview] = useState([]);
  const [property_id, setProperty_id] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { review, property_id };
    fetch(`/reviews/${single.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditId(null);
        const newReviews = reviews.filter((r) => r.id !== data.id);
        setReviews([data, ...newReviews]);
        console.log(data);
      });
  }

  return (
    <div className="update">
      <h1>Update review</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="review"
          value={review}
          placeholder="add new review"
          onChange={(e) => setReview(e.target.value)}
        />
        <input
          type="text"
          name="property_id"
          value={property_id}
          placeholder="add new property_id"
          onChange={(e) => setProperty_id(e.target.value)}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
