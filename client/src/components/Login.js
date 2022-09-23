import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    const userInfo = { username, password };
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          console.log("Login was successful", data);
          setUsername("");
          setPassword("");
        });
      } else {
        console.warn("Login unsuccessful");
      }
    });
  }

  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
    }).then(console.log("Logged out succesfully"));
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          placeholder="enter username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          name="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">login</button>
        <button onClick={handleLogout}>logout</button>
      </form>
    </div>
  );
}
