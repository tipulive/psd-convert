// AppContext.js
import React, { useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [isContentVisible, setIsContentVisible] = useState(true);

  const toggleContentVisibility = () => {
    setIsContentVisible((prevState) => !prevState);
  };

  return (
    <AppContext.Provider value={{ isContentVisible, toggleContentVisibility}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
