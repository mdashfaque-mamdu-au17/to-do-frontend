import React from 'react';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import { useGlobalContext } from './store/context';
import classNames from 'classnames';
import RootLayout from './pages/RootLayout';
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
      <RootLayout />
    </main>
  );
}

export default App;
