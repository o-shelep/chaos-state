import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <a href="/">
            <p>
              c<span className={styles.firstLetter}>h</span>a
              <span className={styles.thin}>o</span>
              <span className={styles.lastLetter}>s</span>
            </p>
          </a>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li>
            <a href="/auth/signin">увійти</a>
          </li>
          <li>
            <a href="/tests/66f586bec76785b1bfc0d33b">тест</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
