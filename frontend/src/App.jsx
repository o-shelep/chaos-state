import React  from 'react';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import TestPage from './pages/TestPage';
import CreateTestPage from "./pages/CreateTestPage";
import MoreTestsPage from './pages/MoreTestsPage';
import ResultPage from './pages/ResultPage';
import MePage from './pages/MePage';
import styles from './App.module.css';

const App = () => {

  return (
      <div className={styles.appContainer}>
       {/* <HomePage/> */}
       {/* <RegisterPage/> */}
       {/* <TestPage/> */}
       {/* <CreateTestPage/> */}
       {/* <MoreTestsPage/> */}
       {/* <ResultPage/> */}
       <MePage/>
      </div>
  );
};

export default App;
