import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';
import CreateTestPage from "./pages/CreateTestPage";
import MoreTestsPage from './pages/MoreTestsPage';
import ResultPage from './pages/ResultPage';
import styles from './App.module.css';

const App = () => {

  return (
      <div className={styles.appContainer}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<RegisterPage />} />
        <Route path="/tests/:testId" element={<TestPage />} />
        <Route path="/results/:testId" element={<ResultPage />} />
        <Route path="/create-test" element={<CreateTestPage />} />
        <Route path="/more-tests" element={<MoreTestsPage />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;
