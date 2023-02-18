import classNames from 'classnames';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../store/context';

const Form = () => {
  const { theme, createNewTaskHandler } = useGlobalContext();
  const navigate = useNavigate();
  const inputRef = useRef();

  const formStyle = theme
    ? 'bg-secondary-dark placeholder:text-gray-700 text-violet-800 shadow-input-dark'
    : 'bg-white placeholder:text-gray-500 text-gray-800 shadow-input-light';

  function formSubmitHandler(event) {
    event.preventDefault();
    createNewTaskHandler(inputRef.current.value);
    inputRef.current.value = '';
    navigate('/');
  }
  return (
    <form
      className={classNames('relative rounded-[5px]')}
      onSubmit={formSubmitHandler}
    >
      <label htmlFor="task">
        <button
          type="submit"
          className={classNames(
            'w-5 h-5 absolute left-5 top-1/2 transform -translate-y-1/2 lg:h-6 lg:w-6 lg:left-6 rounded-full border-solid border-[1px]',
            theme && 'border-gray-800'
          )}
        ></button>
        <input
          type="text"
          ref={inputRef}
          placeholder="Create a new todo…"
          className={classNames(
            'w-full h-12 pl-[52px] lg:pl-[72px] lg:h-16 focus:outline-none rounded-[5px] text-xs leading-3 sm:text-lg sm:leading-[18px] sm:-tracking-[0.25px] font-normal',
            formStyle
          )}
        />
      </label>
    </form>
  );
};

export default Form;
