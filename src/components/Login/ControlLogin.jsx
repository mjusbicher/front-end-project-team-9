import React, { useEffect, useState } from "react";
import { Login, AuthenticatedUserApp } from "./Login";


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
    <AuthenticatedUserApp user={user} />
  ) : (
    <Login onSuccess={setUser}/>
  );
};

export default ControlLogin;
