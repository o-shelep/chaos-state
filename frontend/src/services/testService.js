// src/services/testService.js
const API_URL = "http://localhost:5000/tests";

export const createTest = async (testData, token) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(testData),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    return await response.json();
};
