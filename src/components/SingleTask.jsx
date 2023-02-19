import React, { useState } from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '../store/context';
import completedIcon from '../assets/icon-check.svg';
import Cross from '../assets/icon-cross.svg';
import { useLocation } from 'react-router-dom';

const SingleTask = ({ name, completed, _id: taskId }) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const { theme, deleteTask, updateTask, disable } = useGlobalContext();
  const location = useLocation();

  const textStyle = theme ? 'text-violet-800' : 'text-gray-600';
  const buttonStatus = theme ? 'border-gray-800' : '';
  const borderStyle = theme ? 'border-b-gray-800' : 'border-b-gray-300';
  const completedStyle = theme ? 'text-light-dark' : 'text-gray-100';
  const deleteTaskHandler = () => {
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
    deleteTask(taskId, action);
  };

  const updateTaskHandler = () => {
    let action;
    if (location.pathname === '/activeTasks') {
      action = 'FETCH_ACTIVE';
    }
    if (location.pathname === '/completedTasks') {
      action = 'FETCH_COMPLETED';
    }
    setIsCompleted(!isCompleted);
    updateTask(taskId, !isCompleted, action);
  };

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
            isCompleted && 'completedBtn',
            buttonStatus,
            disable && 'cursor-wait'
          )}
          onClick={updateTaskHandler}
        >
          {isCompleted && <img src={completedIcon} />}
        </button>
        <div>
          <p
            className={classNames(
              'text-xs leading-3 sm:text-lg sm:leading-[18px]',
              textStyle,
              isCompleted && 'line-through',
              isCompleted && completedStyle
            )}
          >
            {name}
          </p>
        </div>
      </div>
      <button
        className={classNames(
          'group/edit absolute right-5 top-1/2 transform -translate-y-1/2 lg:right-6 lg:invisible lg:group-hover/item:visible',
          disable && 'cursor-wait'
        )}
        onClick={deleteTaskHandler}
      >
        <img src={Cross} alt="" className="w-3 h-3 lg:w-[18px] lg:h-[18px]" />
      </button>
    </article>
  );
};

export default SingleTask;
