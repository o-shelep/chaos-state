const apiUrl = process.env.REACT_APP_API_URL;

export async function fetchUserData(token) {
    try {
        const response = await fetch(`${apiUrl}/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

export async function signOutUser() {
    try {
        await fetch(`${apiUrl}/auth/signout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        localStorage.removeItem("token");
    } catch (error) {
        console.error("Error signing out:", error);
        throw error;
    }
}

export async function deleteUserAccount(token) {
    try {
        const response = await fetch(`${apiUrl}/users/deleteMe`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Server Error:", errorData.message || "Failed to delete account");
            throw new Error(errorData.message || "Failed to delete account");
        }
    } catch (error) {
        console.error("Error deleting account:", error);
        throw error;
    }
}
