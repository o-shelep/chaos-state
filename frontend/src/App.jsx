import React , {useState, useEffect} from 'react';
import Header from "./components/Header/Header";
import styles from'./App.module.scss';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
      <div className={styles.appContainer}>
       <Header isLoggedIn={isLoggedIn}/>
      </div>
  );
};

export default App;
