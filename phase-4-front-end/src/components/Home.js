import React, { useState, useEffect } from "react";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/properties")
      .then((response) => response.json())
      .then((properties) => setProperties(properties));
  }, []);

  const foundProperties = properties.map((p) => (
    <div key={p.id}>
      <img src={p.image_url} alt="pic of house" />
      <h1>{p.title}</h1>
      <h2>{p.description}</h2>
      <h2>{p.address}</h2>
      <p>{p.id}</p>
    </div>
  ));

  return <div>{foundProperties}</div>;
}

export default Home;
