import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import styles from "./Me.module.css";

const TESTS_PER_PAGE = 3;

function Me() {
    const [tests, setTests] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch("http://localhost:5000/users/me", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
            })
                .then(resourse => resourse.json())
                .then(data => {
                    if (data.status === 'success') {
                        setTests(data.data.tests);
                    } else {
                        console.error('Failed to fetch user data.');
                    }
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, []);

    const totalPages = Math.ceil(tests.length / TESTS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(previousPage => previousPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(previousPage => previousPage - 1);
        }
    };

    const handleTakeTest = (testId) => {
        navigate(`/tests/${testId}`);
    };

    const handleSignOut = async () => {
        try {
            await fetch("http://localhost:5000/auth/signout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            localStorage.removeItem('token');
            navigate("/auth/register");
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem('token');
    
        try {
            const response = await fetch("http://localhost:5000/users/deleteMe", {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                localStorage.removeItem('token');
                navigate("/");
            } else {
                const errorData = await response.json();
                console.error('Server Error:', errorData.message || 'Failed to delete account');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

    const startIndex = currentPage * TESTS_PER_PAGE;
    const displayedTests = tests.slice(startIndex, startIndex + TESTS_PER_PAGE);

    return (
        <div className={styles.accountContainer}>
            <div className={styles.infoSection}>
                <div className={styles.signoutButton} onClick={handleSignOut}>
                    <Link to="#" className={styles.signoutLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                    </Link>
                    <div className={styles.tooltip}>this is sign out button</div>
                </div>
                <div className={styles.usernameSection}>
                    <h3 className={styles.usernameText}>{username}</h3> 
                </div>
                <div className={styles.deleteButton} onClick={handleDeleteAccount}>
                    <Link to="#" className={styles.deleteLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </Link>
                    <div className={styles.tooltip}>this button will delete your account</div>
                </div>
            </div>
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
                onClick={handlePreviousPage} 
                disabled={currentPage === 0}
            >
                &lt; Previous
            </button>
            <span className={styles.span}>{currentPage + 1} of {totalPages}</span>
            <button 
                className={styles.arrowButton} 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages - 1}
            >
                Next &gt;
            </button>
        </div>
    </div>
        </div>
    );
}

export default Me;
