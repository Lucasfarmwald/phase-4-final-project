import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Haus
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>

          <li>
            <a href="/properties">Properties</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
