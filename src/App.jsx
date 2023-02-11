import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import { useGlobalContext } from './store/context';
import classNames from 'classnames';
import RootLayout from './pages/RootLayout';
import AllTasks from './pages/AllTasks';
import ActiveTasks from './pages/ActiveTasks';
import CompletedTasks from './pages/CompletedTasks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <AllTasks /> },
      { path: 'activeTasks', element: <ActiveTasks /> },
      { path: 'completedTasks', element: <CompletedTasks /> },
    ],
  },
]);

function App() {
  const { theme } = useGlobalContext();
  return (
    <main
      className={classNames(
        'min-h-screen',
        theme ? 'bg-primary-dark' : 'bg-white'
      )}
    >
      <Hero />
      <Navbar />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
