const API_URL = "http://localhost:5000/api/contacts";

const handleResponse = async (response) => {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
};

export const getContacts = async () => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

export const createContact = async (contact) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    });

    return handleResponse(response);
};

export const updateContact = async (id, contact) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
    });

    return handleResponse(response);
};

export const deleteContact = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    return handleResponse(response);
};