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
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [allTasksLoading, setAllTasksLoading] = useState(false);
  const [activeTasksLoading, setActiveTasksLoading] = useState(false);
  const [completedTasksLoading, setCompletedTasksLoading] = useState(false);
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

  const fetchActiveTasks = async () => {
    try {
      setActiveTasksLoading(true);
      const data = await fetch(`${baseUrl}/tasks?completed=false`);
      const result = await data.json();
      setActiveTasks(result.tasks);
      setActiveTasksLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompletedTasks = async () => {
    try {
      setCompletedTasksLoading(true);
      const data = await fetch(`${baseUrl}/tasks?completed=true`);
      const result = await data.json();
      setCompletedTasks(result.tasks);
      setCompletedTasksLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createNewTaskHandler = async (newTask) => {
    try {
      const response = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newTask }),
      });
      fetchAllTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (taskId, completed, fetchType) => {
    console.log(taskId, completed);
    try {
      const response = await fetch(`${baseUrl}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: completed }),
      });
      if (fetchType === 'FETCH_ACTIVE') {
        fetchActiveTasks();
      }
      if (fetchType === 'FETCH_COMPLETED') {
        fetchCompletedTasks();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId, fetchType) => {
    try {
      const response = await fetch(`${baseUrl}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (fetchType === 'FETCH_ALL' && response.ok) {
        fetchAllTasks();
      }
      if (fetchType === 'FETCH_ACTIVE' && response.ok) {
        fetchActiveTasks();
      }
      if (fetchType === 'FETCH_COMPLETED') {
        fetchCompletedTasks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCompleted = async (fetchType) => {
    try {
      const response = await fetch(`${baseUrl}/tasks/clearCompleted`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (fetchType === 'FETCH_ALL' && response.ok) {
        fetchAllTasks();
      }
      if (fetchType === 'FETCH_ACTIVE' && response.ok) {
        fetchActiveTasks();
      }
      if (fetchType === 'FETCH_COMPLETED') {
        fetchCompletedTasks();
      }
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
        deleteTask,
        fetchActiveTasks,
        activeTasksLoading,
        activeTasks,
        fetchAllTasks,
        completedTasks,
        completedTasksLoading,
        fetchCompletedTasks,
        updateTask,
        clearCompleted,
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
