const API_URL = "https://movie-tracker-backend-oiss.onrender.com/";

export const getMovies = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to get movies");
    }

    return response.json();
};

export const createMovie = async (movie) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    });

    if (!response.ok) {
        throw new Error("Failed to create movie");
    }

    return response.json();
};
