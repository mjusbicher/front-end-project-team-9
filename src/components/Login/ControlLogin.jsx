import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Navigate } from "react-router-dom";


const ControlLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
    }
  }, [user]);

  return isLoggedIn ? (
    <Navigate replace to="/main" user={user} />
  ) : (
    <Login onSuccess={setUser}/>
  );
};

export default ControlLogin;
