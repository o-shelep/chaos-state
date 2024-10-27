import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';

const Header = ({ isLoggedIn }) => {

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <p>
              c<span className={styles.firstLetter}>h</span>a
              <span className={styles.thin}>o</span>
              <span className={styles.lastLetter}>s</span>
            </p>
          </Link>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/create-test">створити тест</Link>
              </li>
              <li>
                <Link to="/more-tests">більше тестів</Link>
              </li>
              <li>
                <Link to="/me">моя сторінка</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/auth/register">увійти</Link>
              </li>
              <li>
                <Link to="/tests/66f586bec76785b1bfc0d33b">тест</Link>
              </li>
            </>
          )}
        </ul>        
      </div>
    </nav>
  );
};

export default Header;
