import React, { useState, createContext } from "react";
import { useEffect } from "react";

// Create the context
const UserContext = createContext();

const ContextProvider = ({ children }) => {
  // State to hold the registration status
   const [register, setRegister] = useState(() => {
    const savedState = localStorage.getItem('isRegistered');
    return savedState === 'true' ? true : false;  // Convert to boolean
   });
    
      useEffect (() => {
    localStorage.setItem('isRegistered', register);
  }, [register]);
  
  return (
    // Provide the state and setter function to children components
    <UserContext.Provider value={{ register, setRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, ContextProvider };
