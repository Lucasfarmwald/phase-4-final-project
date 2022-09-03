import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="house">
      <button>
        <span id="span">Let's find a Haus...</span>
      </button>
    </div>
  );
}

export default Home;
