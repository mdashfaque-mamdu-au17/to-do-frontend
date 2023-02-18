import classNames from 'classnames';
import React from 'react';
import { useGlobalContext } from '../store/context';

const NoTaskFound = () => {
  const { theme } = useGlobalContext();
  const textStyle = theme ? 'text-violet-800' : 'text-gray-600';

  return (
    <div className="py-4">
      <h1 className={classNames('text-lg text-center', textStyle)}>
        No Tasks Found
      </h1>
    </div>
  );
};

export default NoTaskFound;
