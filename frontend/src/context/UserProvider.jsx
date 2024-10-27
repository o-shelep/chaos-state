import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};