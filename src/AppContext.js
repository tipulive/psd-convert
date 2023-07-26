// AppContext.js
import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const toggleContentVisibility = () => {
    setIsContentVisible((prevState) => !prevState);
  };

  return (
    <AppContext.Provider value={{ isContentVisible, toggleContentVisibility,isActive, setIsActive}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
