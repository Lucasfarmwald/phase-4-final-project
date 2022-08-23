import React, { useState } from "react";

export default function SignUp() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          placeholder="First Name"
        ></input>
        <input
          type="text"
          name="lastname"
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          placeholder="Last Name"
        ></input>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <input
          type="text"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          placeholder="Confirm password"
        ></input>
        <button type="submit">Sign-up</button>
      </form>
    </div>
  );
}
