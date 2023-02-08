import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();

const getStorageTheme = () => {
  // let theme = false;
  let theme;
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return theme === 'true' ? true : false;
};
const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStorageTheme());

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
