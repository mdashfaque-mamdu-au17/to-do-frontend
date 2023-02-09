import React from 'react';
import Form from '../sections/Form';

const RootLayout = () => {
  return (
    <section className="absolute top-[108px] w-full px-6 lg:top-[158px] left-1/2 transform -translate-x-1/2 sm:w-[540px] sm:px-0">
      <div>
        <Form />
      </div>
    </section>
  );
};

export default RootLayout;
