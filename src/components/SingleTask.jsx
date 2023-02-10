import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '../store/context';
import completedIcon from '../assets/icon-check.svg';
import Cross from '../assets/icon-cross.svg';

const SingleTask = ({ name, completed }) => {
  const { theme } = useGlobalContext();

  const textStyle = theme ? 'text-violet-800' : 'text-gray-600';
  const buttonStatus = theme ? 'border-gray-800' : '';
  const buttonCancel = '';
  const borderStyle = theme ? 'border-b-gray-800' : 'border-b-gray-300';
  return (
    <article
      className={classNames(
        'relative border-b-[1px] group/item hover:cursor-pointer',
        borderStyle
      )}
    >
      <div
        className={classNames(
          'px-5 flex items-center gap-3 lg:px-6 lg:gap-6 py-4 lg:py-5'
        )}
      >
        <button
          className={classNames(
            'w-5 h-5 rounded-full border-solid border-[1px] lg:w-6 lg:h-6 flex items-center justify-center',
            completed && 'completedBtn',
            buttonStatus
          )}
        >
          {completed && <img src={completedIcon} />}
        </button>
        <div>
          <p
            className={classNames(
              'text-xs leading-3 sm:text-lg sm:leading-[18px]',
              textStyle,
              completed && 'line-through'
            )}
          >
            {name}
          </p>
        </div>
      </div>
      <button className="group/edit absolute right-5 top-1/2 transform -translate-y-1/2 lg:right-6 lg:invisible lg:group-hover/item:visible">
        <img src={Cross} alt="" className="w-3 h-3 lg:w-[18px] lg:h-[18px]" />
      </button>
    </article>
  );
};

export default SingleTask;
