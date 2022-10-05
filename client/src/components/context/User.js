import { useEffect } from "react";
import React, { useState } from "react";
const UserContext = React.createContext();

function UserProvider() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      } else {
        console.log("no one is logged in");
        setUser(false);
      }
    });
  }, []);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, signup, loggedIn }}
    ></UserContext.Provider>
  );
}

export { UserContext, UserProvider };
