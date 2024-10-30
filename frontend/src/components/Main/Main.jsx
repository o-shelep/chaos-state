import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

import TestImage from "../../../assets/main.jpg";
import styles from "./Main.module.css";

function Main() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleTestButtonClick = () => {
    navigate(`/tests/${process.env.MAIN_TEST_ID}`);
  };

  const handleCreateTestClick = () => {
    navigate("/create-test");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageWrapper}>
        <img src={TestImage} alt="chaos-main-image" />
      </div>
      <div className={styles.titleWrapper}>
        {isLoggedIn ? (
          <>
            <h1 className={styles.mainTitle}>Вітаємо, {username || "Guest"}</h1>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionText}>
                Ласкаво просимо до chaos-state! ви можете створити цікавий тест
                для інших. Просто заповніть деталі свого тесту, включаючи
                назву, опис, кількість питань і можливі відповіді. пам’ятайте,
                що тут немає правильних чи неправильних відповідей — уся справа
                в тому, щоб весело провести час і поділитися своєю творчістю!
                коли ви завершите тест, його зможуть спробувати інші. enjoy the
                chaos!<br />
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.testButton} onClick={handleCreateTestClick}>
                  почати
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className={styles.mainTitle}>Здавалося б все — можна вішатись, але</h1>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionText}>
                Пройдіть короткий тест на визначення типу особистості за
                Шелеп.<br />
                Цей тест не є підставою для звернення до психолога і був
                створений виключно з метою витрати вашого дорогоцінного часу на
                непотрібну херню, яка нічого вам не дасть. Крім того, після
                проходження тесту для вас відкриється можливість реєстрації з
                метою подальшого створення таких же тупих тестів.
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.testButton} onClick={handleTestButtonClick}>
                  тест
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
