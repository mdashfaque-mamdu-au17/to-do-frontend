import classNames from 'classnames';
import React from 'react';
import Title from '../components/Title';
import { useGlobalContext } from '../store/context';

const Footer = () => {
  const { theme } = useGlobalContext();
  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';
  const textStyle = theme ? 'text-gray-200' : 'text-gray-500';
  return (
    <div className="">
      {/* mobile */}
      <div
        className={classNames(
          'px-5 pt-4 pb-5 flex justify-between items-center',
          containerStyle
        )}
      >
        <div>
          <Title />
        </div>
        <div>
          <button
            className={classNames(
              'text-xs leading-3 font-normal sm:text-sm sm:leading-[14px]',
              textStyle
            )}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
