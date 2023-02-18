import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../components/Title';
import { useGlobalContext } from '../store/context';
import MobileNavigation from './MobileNavigation';

const Footer = () => {
  const { theme, clearCompleted } = useGlobalContext();
  const location = useLocation();
  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';
  const textStyle = theme
    ? 'text-gray-200 hover:text-gray-300'
    : 'text-gray-500 hover:text-gray-600';

  const clearCompletedHander = () => {
    let action;
    if (location.pathname === '/') {
      action = 'FETCH_ALL';
    }
    if (location.pathname === '/activeTasks') {
      action = 'FETCH_ACTIVE';
    }
    if (location.pathname === '/completedTasks') {
      action = 'FETCH_COMPLETED';
    }
    clearCompleted(action);
  };
  return (
    <div className="relative">
      {/* mobile */}
      <div
        className={classNames(
          'px-5 pt-4 pb-5 flex justify-between items-center sm:px-6',
          containerStyle
        )}
      >
        <div>
          <Title />
        </div>
        <div>
          <button
            className={classNames(
              'text-xs leading-3 font-normal sm:text-sm sm:leading-[14px] transition-all duration-500',
              textStyle
            )}
            onClick={clearCompletedHander}
          >
            Clear Completed
          </button>
        </div>
      </div>

      {/* navigation */}
      <div className="hidden sm:block sm:absolute sm:left-[189px] sm:top-1/2 sm:transform sm:-translate-y-1/2">
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Footer;
