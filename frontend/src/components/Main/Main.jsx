import React from 'react';
import styles from "./Main.module.css";
import TestImage from "../../../assets/main.jpg";
import {useNavigate} from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleTestButtonClick = () => {
    const testId = '66f586bec76785b1bfc0d33b'; 
    navigate(`/tests/${testId}`);  
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageWrapper}>
        <img src={TestImage} alt="chaos-main-image" />
      </div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.mainTitle}>Здавалося б все — можна вішатись, але</h1>
        <div className={styles.descriptionWrapper}>
          <p className={styles.descriptionText}>
            Пройдіть короткий тест на визначення типу особистості за Шелеп.<br />
            Цей тест не є підставою для звернення до психолога і був створений виключно з метою витрати вашого дорогоцінного часу на непотрібну херню, яка нічого вам не дасть. Крім того, після проходження тесту для вас відкриється можливість реєстрації з метою подальшого створення таких же тупих тестів.
          </p>
          <div className={styles.buttonWrapper}>
            <button className={styles.testButton} onClick={handleTestButtonClick}>тест</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
