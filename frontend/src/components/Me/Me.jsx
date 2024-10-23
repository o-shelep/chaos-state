import React from 'react';
import styles from "./Me.module.css";

const USERNAME = "Your Username"; 
const TESTS = []; 
const NO_TESTS_MESSAGE = "No tests available.";

function Me() {
  const handleTakeTest = (testId) => {
    console.log("Test ID:", testId);
  }

  return (
    <div className={styles.myAccountContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.signoutContainer}>
          <a href="#" className={styles.signoutContainerLink}>
            <i className="fas fa-right-from-bracket"></i>
          </a>
        </div>
        <div className={styles.usernameContainer}>
          <h3 className={styles.usernameContainerText}>{USERNAME}</h3> 
        </div>
        <div className={styles.deleteContainer}>
          <a href="#" className={styles.deleteContainerLink}>
            <i className="fas fa-trash"></i>    
          </a>
        </div>
      </div>

      <div className={styles.moreTestsContainer}>
        {TESTS.length > 0 ? (
          TESTS.map((test, index) => (
            <div key={index} className={styles.testContainer}>
              <div className={styles.test}>
                <h3 className={styles.testName}>{test.name}</h3>
                <p className={styles.testDescription}>{test.description}</p>
                <button
                  className={styles.testBtn}
                  onClick={() => handleTakeTest(test._id)} 
                >
                  Take this test
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>{NO_TESTS_MESSAGE}</p>
        )}
      </div>
    </div>
  );
}

export default Me;
