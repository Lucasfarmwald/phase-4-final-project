import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function handleChange() {
    navigate("/properties");
  }

  return (
    <div className="house">
      Hi
      <form onSubmit={handleChange}>
        <button>
          <span id="span">Let's find a Haus...</span>
        </button>
      </form>
    </div>
  );
}

export default Home;
