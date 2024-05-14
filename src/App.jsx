import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/auth/action';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <div className="app-container">
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="threads/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
