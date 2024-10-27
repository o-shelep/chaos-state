import { useEffect, useState } from "react";

const TESTS_PER_PAGE = 3;

const useMoreTests = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

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
            } catch (error_) {
                console.error(error_);
                setError(error_.message);
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

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const displayedTests = tests.slice(currentPage * TESTS_PER_PAGE, (currentPage + 1) * TESTS_PER_PAGE);
    
    while (displayedTests.length < TESTS_PER_PAGE) {
        displayedTests.push(null);
    }

    return {
        tests,
        loading,
        error,
        currentPage,
        totalPages,
        displayedTests,
        handleNextPage,
        handlePreviousPage,
    };
};

export default useMoreTests;
