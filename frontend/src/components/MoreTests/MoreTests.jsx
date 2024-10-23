import React, { useState } from "react";
import styles from "./MoreTests.module.css";

const TESTS = [
    { id: "1", name: "Test 1", description: "Description for Test 1" },
    { id: "2", name: "Test 2", description: "Description for Test 2" },
    { id: "3", name: "Test 3", description: "Description for Test 3" },
    { id: "4", name: "Test 4", description: "Description for Test 4" },
    { id: "5", name: "Test 5", description: "Description for Test 5" },
    { id: "6", name: "Test 6", description: "Description for Test 6" },
    // Add more tests as needed
];

const TESTS_PER_PAGE = 3;

function MoreTests() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(TESTS.length / TESTS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const startIndex = currentPage * TESTS_PER_PAGE;
    const displayedTests = TESTS.slice(startIndex, startIndex + TESTS_PER_PAGE);

    return (
        <div className={styles.moreTestsContainer}>
            <div className={styles.testsRow}>
                {displayedTests.map(test => (
                    <div className={styles.testContainer} key={test.id}>
                        <div className={styles.test}>
                            <h3 className={styles.testName}>{test.name}</h3>
                            <p className={styles.testDescription}>{test.description}</p>
                            <a 
                                href={`/tests/${test.id}`} 
                                className={styles.testBtn}
                            >
                                Take this test
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.paginationControls}>
                <button 
                    className={styles.arrowButton} 
                    onClick={handlePrevPage} 
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
