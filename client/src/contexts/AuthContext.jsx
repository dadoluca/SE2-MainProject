import React, { createContext, useState, useEffect } from 'react';
import API from '../services/api.jsx';

const AuthContext = createContext();

//Provider: the component that distributes the value prop to the "consuming" child components.
const AuthProvider = ({ children }) => {
  /*
  Since the state information is simple and does not involve a complex
  series of actions that modify it, we use useState rather than useReducer.
  */
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await API.getUserInfo();
        setLoggedIn(true);
        setUser(user);
      } catch (err) {
        if (err.error === "Not authenticated") {
          console.log("User not logged in");
        }
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const user = await API.logIn(credentials);
      setLoggedIn(true);
      setMessage({ msg: `Welcome, ${user.name}!`, type: 'success' });
      setUser(user);
    } catch (err) {
      setMessage({ msg: err, type: 'danger' });
    }
  };

  const handleLogout = async () => {
    try {
      await API.logOut();
      setLoggedIn(false);
      setMessage({ msg: `Logged out`, type: 'success' });
      setUser(null);
    } catch (err) {
      setMessage({ msg: err, type: 'danger' });
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user, message, setMessage, handleLogin, handleLogout }}>
      {/*

      Why this Context?

      All components within the AuthProvider can access the Auth State and Auth Context functions
      without having to explicitly pass this information through the props, resolving prop drilling.

      */}
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };