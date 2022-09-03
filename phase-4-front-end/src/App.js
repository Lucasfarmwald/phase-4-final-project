import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import CreateNewReviews from "./components/CreateReview";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log("logged in", user);
          setUser(user);
        });
      } else {
        console.log("no one is logged in");

        setUser(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/properties" element={<Properties user={user} />} />
          <Route path="/reviews" element={<CreateNewReviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
