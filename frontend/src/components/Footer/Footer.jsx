import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <p>
               c<span className={styles.firstLetter}>h</span>a
              <span className={styles.thin}>o</span>
              <span className={styles.lastLetter}>s</span>
            </p>
          </Link>
        </div>
        <p className={styles.footerRights}>all rights reserved | shelep olha</p>
      </div>

      <div className={styles.footerContent}>
        <h4>Know More</h4>
        <ul>
          <li><Link href="tel:0 800 505 201">0 800 505 201 - Гаряча лінія МОЗ</Link></li>
          <li><Link href="tel:0 800 60 20 19">0 800 60 20 19 - Контакт-центр МОЗ</Link></li>
          <li><Link href="tel:0 800 501 701">0 800 501 701 - Всеукраїнський телефон довіри</Link></li>
        </ul>
      </div>

      <div className={styles.footerContent}>
        <h4>Get Help</h4>
        <ul>
          <li><Link href="https://mindlyspace.com/">Mindly Space</Link></li>
          <li><Link href="https://www.rozmova.me/">Rozmova</Link></li>
          <li><Link href="https://www.rozmova.me/tests">Tests</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
