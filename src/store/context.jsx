import React, { useContext, useState, useEffect } from 'react';

let baseUrl = 'https://to-do-api-t50i.onrender.com/api/v1';
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
  const [allTasks, setAllTasks] = useState([]);
  const [allTasksLoading, setAllTasksLoading] = useState(false);

  const allTasksCount = allTasks.length;

  const changeTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const fetchAllTasks = async () => {
    try {
      setAllTasksLoading(true);
      const data = await fetch(`${baseUrl}/tasks`);
      const result = await data.json();
      setAllTasks(result.tasks);
      setAllTasksLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const createNewTaskHandler = async (newTask) => {
    try {
      const response = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newTask }),
      });
      console.log(response);
      fetchAllTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
        allTasks,
        allTasksLoading,
        allTasksCount,
        createNewTaskHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
