import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    const userInfo = { email, password };
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          console.log("Login was successful", data);
          setEmail("");
          setPassword("");
        });
      } else {
        console.warn("Login unsuccessful");
      }
    });
  }

  function handleLogout(e) {
    e.preventDefault();
    fetch("http://localhost:4000/logout", {
      method: "DELETE",
    }).then(console.log("Logged out succesfully"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={email}
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          name="password"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">login</button>
      </form>
      <form onSubmit={handleLogout}>
        <button>Logout</button>
      </form>
    </div>
  );
}
