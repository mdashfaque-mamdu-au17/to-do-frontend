import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import SingleTask from '../components/SingleTask';
import { useGlobalContext } from '../store/context';

const AllTasks = () => {
  const { theme, allTasks, allTasksLoading } = useGlobalContext();

  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';

  return (
    <section className={classNames(containerStyle)}>
      {allTasksLoading && <h1>Loading...</h1>}
      {allTasks.length < 1 && <p>No Taks Found.</p>}
      {!allTasksLoading &&
        allTasks.map((singleTask) => {
          return <SingleTask {...singleTask} key={singleTask?._id} />;
        })}
    </section>
  );
};

export default AllTasks;
