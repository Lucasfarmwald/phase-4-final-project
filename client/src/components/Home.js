import React, { useState, useEffect } from "react";

import EditReview from "./EditReview";
function Home() {
  const [reviews, setReviews] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  const allReviews = reviews.map((single) => {
    if (editId === single.id) {
      return (
        <div className="update">
          <EditReview
            setEditId={setEditId}
            single={single}
            setReviews={setReviews}
            reviews={reviews}
          />
          <button onClick={() => setEditId(null)}>cancel</button>
        </div>
      );
    } else {
      return (
        <div className="update">
          <h2>{single.review}</h2>
          <button onClick={() => setEditId(single.id)}>edit</button>
        </div>
      );
    }
  });

  return <div className="house">{allReviews}</div>;
}

export default Home;
