const API_URL = "http://localhost:5000/auth";

const signIn = async (email, password) => {
    const response = await fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
};

const signUp = async (name, email, password, passwordConfirm) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
    });
    return await response.json();
};

const fetchUsername = async (email) => {
    const response = await fetch(`http://localhost:5000/users/username?email=${encodeURIComponent(email)}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
    });
    return await response.json();
};

export { fetchUsername, signIn, signUp };
