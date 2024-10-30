import React from "react";
import { useNavigate } from "react-router-dom";

import useMoreTests from "../../hooks/useMoreTests";
import styles from "./MoreTests.module.css";

function MoreTests() {
    const navigate = useNavigate();
    const {
        loading,
        error,
        currentPage,
        totalPages,
        displayedTests,
        handleNextPage,
        handlePreviousPage,
    } = useMoreTests();

    const handleTakeTest = (testId) => {
        navigate(`/tests/${testId}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.moreTestsContainer}>
            <div className={styles.testsRow}>
                {displayedTests.map((test, index) => (
                    <div
                        className={test ? styles.testContainer : styles.placeholderContainer}
                        key={test ? test._id : `placeholder-${index}`}
                    >
                        {test ? (
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
                        ) : null}
                    </div>
                ))}
            </div>

            <div className={styles.paginationControls}>
                <button
                    className={styles.arrowButton}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 0}
                >
                    &lt; Previous
                </button>
                <span>{currentPage + 1} of {totalPages}</span>
                <button
                    className={styles.arrowButton}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages - 1}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
}

export default MoreTests;
