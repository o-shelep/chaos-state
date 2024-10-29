import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
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
          <li>
            <Link to={"/auth/signin"}>увійти</Link>
          </li>
          <li>
            <Link to={"/tests/66f586bec76785b1bfc0d33b"}>тест</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
