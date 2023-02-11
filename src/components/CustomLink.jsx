import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../store/context';

const CustomLink = ({ to, children }) => {
  const { theme } = useGlobalContext();
  const linkStyle = theme ? 'text-gray-200' : 'text-gray-500';
  const linkCommonStyle =
    'text-sm leading-[14px] font-bold transition-colors duration-500 hover:text-blue-600';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `text-blue-600 ${linkCommonStyle}`
          : `${linkStyle} ${linkCommonStyle}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomLink;
