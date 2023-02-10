import classNames from 'classnames';
import React from 'react';
import Footer from '../sections/Footer';
import Form from '../sections/Form';
import { useGlobalContext } from '../store/context';
import AllTasks from './AllTasks';

const RootLayout = () => {
  const { theme } = useGlobalContext();
  const shadowStyle = theme ? 'shadow-input-dark' : 'shadow-input-light';
  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';
  return (
    <section className="absolute top-[108px] w-full px-6 lg:top-[158px] left-1/2 transform -translate-x-1/2 sm:w-[540px] sm:px-0">
      <div>
        <Form />
      </div>
      <div className={classNames('mt-4 lg:mt-6', shadowStyle, containerStyle)}>
        <AllTasks />
        <Footer />
      </div>
    </section>
  );
};

export default RootLayout;
