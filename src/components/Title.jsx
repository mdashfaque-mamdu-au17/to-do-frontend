import classNames from 'classnames';
import React from 'react';
import { useGlobalContext } from '../store/context';

const Title = () => {
  const { theme, allTasksCount } = useGlobalContext();
  const textStyle = theme ? 'text-gray-200' : 'text-gray-500';
  return (
    <p
      className={classNames(
        'text-xs leading-3 font-normal sm:text-sm sm:leading-[14px]',
        textStyle
      )}
    >
      {allTasksCount} items left
    </p>
  );
};

export default Title;
