import React, { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
  }

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
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
