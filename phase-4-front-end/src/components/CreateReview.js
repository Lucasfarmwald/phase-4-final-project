import React, { useState } from "react";

function CreateNewReviews() {
  const [review, setReview] = useState("");
  const [user_id, setUser_id] = useState("");
  const [property_id, setProperty_id] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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

  return (
    <div className="newReview">
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <label> Create a review </label>
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
          placeholder="set user id"
          autoFocus={true}
          onChange={(e) => setUser_id(e.target.value)}
        ></input>
        <input
          type="text"
          value={property_id}
          placeholder="set property id"
          autoFocus={true}
          onChange={(e) => setProperty_id(e.target.value)}
        ></input>

        <button type="submit">Create new review</button>
      </form>
    </div>
  );
}

export default CreateNewReviews;
