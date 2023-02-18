import classNames from 'classnames';
import React, { useEffect } from 'react';
import SingleTask from '../components/SingleTask';
import NoTaskFound from '../components/NoTaskFound';
import Loading from '../components/Loading';
import { useGlobalContext } from '../store/context';

const CompletedTasks = () => {
  const { theme, completedTasks, completedTasksLoading, fetchCompletedTasks } =
    useGlobalContext();

  const containerStyle = theme ? 'bg-secondary-dark' : 'bg-white';

  useEffect(() => {
    fetchCompletedTasks();
  }, []);
  return (
    <section className={classNames(containerStyle)}>
      {completedTasksLoading && <Loading />}
      {completedTasks.length < 1 && !completedTasksLoading && <NoTaskFound />}

      {!completedTasksLoading &&
        completedTasks.map((singleTask) => {
          return <SingleTask {...singleTask} key={singleTask?._id} />;
        })}
    </section>
  );
};

export default CompletedTasks;
