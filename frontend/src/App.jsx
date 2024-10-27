import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import styles from './App.module.css';
import {UserProvider} from "./context/UserProvider";
import CreateTestPage from "./pages/CreateTestPage";
import HomePage from './pages/HomePage';
import MoreTestsPage from './pages/MoreTestsPage';
import MyAccountPage  from "./pages/MyAccountPage";
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import ResultPage from './pages/ResultPage';
import TestPage from './pages/TestPage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {


  return (
   <UserProvider>
      <div className={styles.appContainer}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/tests/:testId" element={<TestPage />} />
        <Route path="/results/:testId" element={<ResultPage />} />
        <Route path="/create-test" element={<ProtectedRoute element={CreateTestPage} />} />
        <Route path="/more-tests" element={<ProtectedRoute element={MoreTestsPage} />} />
        <Route path="/me" element={<ProtectedRoute element={MyAccountPage} />} />
        <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
   </UserProvider>
  );
};

export default App;
