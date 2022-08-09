import React, { useState } from "react";

export default function SignUp() {
  function handleSubmit() {
    fetch("http://localhost:3000/signup");
  }

  return (
    <div>
      <form>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
      </form>
    </div>
  );
}
