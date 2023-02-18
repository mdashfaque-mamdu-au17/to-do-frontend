import classNames from 'classnames';
import React from 'react';
import { useGlobalContext } from '../store/context';

const Loading = () => {
  const { theme } = useGlobalContext();
  const textStyle = theme ? 'text-violet-800' : 'text-gray-600';
  return (
    <div className="py-4">
      <h2 className={classNames('text-xl text-center', textStyle)}>
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
