import classNames from 'classnames';
import React from 'react';
import { useGlobalContext } from '../store/context';

const Hero = () => {
  const { theme } = useGlobalContext();
  const applyBackground = theme
    ? 'bg-hero-pattern-dark-mobile lg:bg-hero-pattern-dark-desktop'
    : 'bg-hero-pattern-light-mobile lg:bg-hero-pattern-light-desktop';
  return (
    <div
      className={classNames(
        applyBackground,
        'bg-cover bg-no-repeat h-[200px] w-full lg:h-[300px]'
      )}
    ></div>
  );
};

export default Hero;
