import React, { useContext } from 'react';
import Sun from '../assets/icon-sun.svg';
import Moon from '../assets/icon-moon.svg';
import { useGlobalContext } from '../store/context';

const Navbar = () => {
  const { theme, changeTheme } = useGlobalContext();

  const changeThemeHandler = () => {
    changeTheme();
  };
  return (
    <nav className="absolute top-12 w-full px-6 lg:top-[70px]  left-1/2 transform -translate-x-1/2 sm:w-[541px] sm:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="uppercase text-white text-xl font-bold tracking-[15px] lg:text-[40px] lg:leading-[40px]">
            todo
          </h1>
        </div>
        <button onClick={changeThemeHandler}>
          <img
            src={theme ? Sun : Moon}
            alt=""
            className="w-5 h-5 lg:w-[26px] lg:h-[26px]"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// theme false = light, true = dark
