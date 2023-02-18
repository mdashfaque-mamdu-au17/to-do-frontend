import classNames from 'classnames';
import React, { useEffect } from 'react';
import SingleTask from '../components/SingleTask';
import Loading from '../components/Loading';
import NoTaskFound from '../components/NoTaskFound';
import { useGlobalContext } from '../store/context';

const ActiveTasks = () => {
  const { theme, fetchActiveTasks, activeTasks, activeTasksLoading } =
    useGlobalContext();

  useEffect(() => {
    fetchActiveTasks();
  }, []);
  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';
  return (
    <section className={classNames(containerStyle)}>
      {activeTasksLoading && <Loading />}
      {activeTasks.length < 1 && !activeTasksLoading && <NoTaskFound />}

      {!activeTasksLoading &&
        activeTasks.map((singleTask) => {
          return <SingleTask {...singleTask} key={singleTask?._id} />;
        })}
    </section>
  );
};

export default ActiveTasks;
