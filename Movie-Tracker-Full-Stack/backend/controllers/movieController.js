const movies = require("../data/movies");

const getMovies = (req, res) => {
    res.json(movies);
}

const createMovie = (req, res) => {
    const { title, director } = req.body;

    if (!title?.trim() || !director?.trim()) {
        return res.status(400).json({
            message:"Couldn't create movie"
        })
    }

    const newMovie = {
        id: Date.now(),
        title: title.trim(),
        director: director.trim()
    }

    movies.push(newMovie);
    res.status(201).json(newMovie);
}

module.exports = { getMovies, createMovie };
