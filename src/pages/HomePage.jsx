import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import ThreadList from '../components/ThreadList';
import { asyncAddThread } from '../states/threads/action';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
      <ThreadList threads={threadList} />
    </section>
  );
}

export default HomePage;
