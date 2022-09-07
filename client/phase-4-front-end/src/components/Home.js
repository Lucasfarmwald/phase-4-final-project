import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function handleChange() {
    navigate("/properties");
  }

  return (
    <div className="house">
      <img
        className="pictureofhouse"
        alt=""
        src="https://a0.muscache.com/im/pictures/09efb5fc-7bf1-44c0-b0ef-241a38533e67.jpg?im_w=1680"
      />
      <form onSubmit={handleChange}>
        <h1>Visiting Tulsa?</h1>
        <button>
          <span id="span">Let's find a Haus...</span>
        </button>
      </form>
      <img
        alt=""
        src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720"
      />
    </div>
  );
}

export default Home;
