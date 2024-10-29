import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import { createTest } from "../services/testService";

export const useCreateTest = (navigate) => {
    const [testName, setTestName] = useState("");
    const [description, setDescription] = useState("");
    const [numberQuestions, setNumberQuestions] = useState(0);
    const [numberResults, setNumberResults] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState([]);
    const [authorId, setAuthorId] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setAuthorId(decodedToken._id);
        }
    }, []);

    const handleTestInfoChange = (e) => {
        const { name, value } = e.target;
        if (name === "testName") setTestName(value);
        if (name === "description") setDescription(value);
    };

    const handleQuestionInfoChange = (e) => {
        const { name, value } = e.target;
        if (name === "numQuestions") {
            setNumberQuestions(Number(value));
            setQuestions(Array.from({ length: Number(value) }, () => ({})));
        } else if (name === "numResults") {
            setNumberResults(Number(value));
            setResults(Array.from({ length: Number(value) }).fill(""));
        }
    };

    const handleQuestionChange = (index, field, value) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[index] = {
                ...updatedQuestions[index],
                [field]: value,
            };
            return updatedQuestions;
        });
    };

    const handleResultChange = (index, value) => {
        const updatedResults = [...results];
        updatedResults[index] = value;
        setResults(updatedResults);
    };

    const handleNextStep = () => setCurrentStep((previousStep) => previousStep + 1);
    const handleBackStep = () => setCurrentStep((previousStep) => previousStep - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const testData = {
            name: testName,
            description,
            numberOfQuestions: numberQuestions,
            numberOfResults: numberResults,
            testBlocks: questions.map((q) => ({
                question: q.question,
                answers: [q.answer1, q.answer2, q.answer3],
            })),
            author: authorId,
            results,
        };

        try {
            const token = localStorage.getItem("token");
            await createTest(testData, token);
            navigate("/me");
        } catch (error) {
            console.error("Error creating test:", error);
        }
    };

    return {
        testName,
        setTestName,
        description,
        setDescription,
        numberQuestions,
        numberResults,
        questions,
        results,
        authorId,
        currentStep,
        handleTestInfoChange,
        handleQuestionInfoChange,
        handleQuestionChange,
        handleResultChange,
        handleNextStep,
        handleBackStep,
        handleSubmit,
    };
};
