import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MoreTests.module.css"; 

const TESTS_PER_PAGE = 3; 

function MoreTests() {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5000/tests/more-tests", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to fetch tests: ${response.status} ${errorText}`);
                }

                const data = await response.json();
                setTests(data.data.tests);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    const totalPages = Math.ceil(tests.length / TESTS_PER_PAGE); 

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

    const handleTakeTest = (testId) => {
        navigate(`/tests/${testId}`);
    };

    const startIndex = currentPage * TESTS_PER_PAGE;
    const displayedTests = tests.slice(startIndex, startIndex + TESTS_PER_PAGE); 

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.moreTestsContainer}>
            <div className={styles.testsRow}>
                {displayedTests.length > 0 ? (
                    displayedTests.map((test) => (
                        <div className={styles.testContainer} key={test._id}>
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
                    <p>No tests available</p>
                )}
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
