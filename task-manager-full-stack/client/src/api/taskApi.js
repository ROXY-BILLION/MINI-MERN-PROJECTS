const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
};

export const createTask = async (task) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to create task");
    }

    return data;
};