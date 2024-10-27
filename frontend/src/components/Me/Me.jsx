import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import  usePaginatedTests  from '../../hooks/usePaginatedTests';
import { deleteUserAccount,signOutUser } from '../../services/apiService';
import styles from "./Me.module.css";

function Me() {
    const { displayedTests, currentPage, totalPages, nextPage, previousPage } = usePaginatedTests();
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOutUser();
            navigate("/auth/register");
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleDeleteAccount = async () => {
        const token = localStorage.getItem('token');
        try {
            await deleteUserAccount(token);
            localStorage.removeItem('token');
            navigate("/");
        } catch (error) {
            console.error('Error deleting account:', error);
        }
    };

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
                                        onClick={() => navigate(`/tests/${test._id}`)} 
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
                        onClick={previousPage} 
                        disabled={currentPage === 0}
                    >
                        &lt; Previous
                    </button>
                    <span className={styles.span}>{currentPage + 1} of {totalPages}</span>
                    <button 
                        className={styles.arrowButton} 
                        onClick={nextPage} 
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
