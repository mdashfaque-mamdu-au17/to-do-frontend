import classNames from 'classnames';
import React from 'react';
import SingleTask from '../components/SingleTask';
import { useGlobalContext } from '../store/context';

const AllTasks = () => {
  const { theme } = useGlobalContext();

  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';
  return (
    <section className={classNames(containerStyle)}>
      <SingleTask name="Complete online JavaScript course" completed={true} />
      <SingleTask name="Jog around the park 3x" completed={false} />
      <SingleTask name="10 minutes meditation" completed={false} />
      <SingleTask name="Read for 1 hour" completed={false} />
      <SingleTask name="Pickup groceries" completed={true} />
    </section>
  );
};

export default AllTasks;
