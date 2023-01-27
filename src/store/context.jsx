import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <AppContext.Provider value={{ theme, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
