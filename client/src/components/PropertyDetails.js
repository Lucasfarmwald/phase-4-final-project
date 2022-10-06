import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function PropertyDetails() {
  const { id } = useParams();

  useEffect(() => {
    fetch(`/properties/${id}`)
      .then((data) => data.json())
      .then((property) => console.log(property));
  });
  return (
    <div className="property">
      <h1>Property details - </h1>
    </div>
  );
}
