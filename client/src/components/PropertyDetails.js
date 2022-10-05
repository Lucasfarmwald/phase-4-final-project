import React from "react";
import { useParams } from "react-router-dom";
export default function PropertyDetails() {
  const { id } = useParams();
  return (
    <div className="property">
      <h1>Property details - {id}</h1>
    </div>
  );
}
