import React from 'react';
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <a href="/">
            <p>
              c<span className={styles.firstLetter}>h</span>a
              <span className={styles.thin}>o</span>
              <span className={styles.lastLetter}>s</span>
            </p>
          </a>
        </div>
        <p className={styles.footerRights}>all rights reserved | shelep olha</p>
        <div className={styles.footerIcons}>
          <a href="https://www.facebook.com/profile.php?id=100081349838351">
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/olha-shelep-a25546318">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="/">
            <i className="bx bxl-paypal"></i>
          </a>
          <a href="https://github.com/shelep-olya">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <div className={styles.footerContent}>
        <h4>Know More</h4>
        <ul>
          <li><a href="tel:0 800 505 201">0 800 505 201 - Гаряча лінія МОЗ</a></li>
          <li><a href="tel:0 800 60 20 19">0 800 60 20 19 - Контакт-центр МОЗ</a></li>
          <li><a href="tel:0 800 501 701">0 800 501 701 - Всеукраїнський телефон довіри</a></li>
        </ul>
      </div>

      <div className={styles.footerContent}>
        <h4>Get Help</h4>
        <ul>
          <li><a href="https://mindlyspace.com/">Mindly Space</a></li>
          <li><a href="https://www.rozmova.me/">Rozmova</a></li>
          <li><a href="https://www.rozmova.me/tests">Tests</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
