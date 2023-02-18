import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import NoTaskFound from '../components/NoTaskFound';
import SingleTask from '../components/SingleTask';
import { useGlobalContext } from '../store/context';

const AllTasks = () => {
  const { theme, allTasks, allTasksLoading, fetchAllTasks } =
    useGlobalContext();

  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';

  useEffect(() => {
    fetchAllTasks();
  }, []);
  return (
    <section className={classNames(containerStyle)}>
      {allTasksLoading && <Loading />}
      {allTasks.length < 1 && !allTasksLoading && <NoTaskFound />}
      {!allTasksLoading &&
        allTasks.map((singleTask) => {
          return <SingleTask {...singleTask} key={singleTask?._id} />;
        })}
    </section>
  );
};

export default AllTasks;
