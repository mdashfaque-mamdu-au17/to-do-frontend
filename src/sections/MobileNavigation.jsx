import classNames from 'classnames';
import React from 'react';
import CustomLink from '../components/CustomLink';
import { useGlobalContext } from '../store/context';

const MobileNavigation = () => {
  const { theme } = useGlobalContext();
  const containerStyle = theme
    ? 'bg-secondary-dark shadow-input-dark'
    : 'bg-white shadow-input-light';
  return (
    <section
      className={classNames(containerStyle, 'rounded-[5px] sm:rounded-none')}
    >
      <ul className="pt-[15px] pb-[19px] flex justify-center items-center gap-[18px]">
        <li>
          <CustomLink to="/">All</CustomLink>
        </li>
        <li>
          <CustomLink to="activeTasks">Active</CustomLink>
        </li>
        <li>
          <CustomLink to="completedTasks">Completed</CustomLink>
        </li>
      </ul>
    </section>
  );
};

export default MobileNavigation;
