import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import "./App.css";
import { useState, useEffect } from "react";
import { getMovies, createMovie } from "./api/movieApi";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  const handleAddMovie = async (movie) => {
    const newMovie = await createMovie(movie);
    setMovies((previousMovie)=>[...previousMovie,newMovie])
  }
  return (
    <div className="app">
      <header className="navbar">
        <a href="#" className="logo">
          CINE<span>VAULT</span>
        </a>

        <nav>
          <a href="#">Home</a>
          <a href="#collection">Collection</a>
          <a href="#add-movie">Add Movie</a>
        </nav>

        <div className="profile">M</div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">YOUR PERSONAL MOVIE LIBRARY</span>

            <h1>
              Every movie has
              <br />
              a <span>story.</span>
            </h1>

            <p>
              Keep track of the movies you love.
              Build your own collection, one film at a time.
            </p>

            <a href="#add-movie" className="hero-button">
              Add a movie <span>↗</span>
            </a>
          </div>

          <div className="hero-decoration">
            <span>01</span>
            <div className="decoration-line"></div>
            <span>YOUR COLLECTION</span>
          </div>
        </section>

        <section className="content-section" id="add-movie">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GET STARTED</span>
              <h2>Add to your library</h2>
            </div>
            <span className="section-number">01 / 02</span>
          </div>

          <MovieForm onAddMovie={handleAddMovie} />
        </section>

        <section className="content-section collection" id="collection">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR LIBRARY</span>
              <h2>Movie collection</h2>
            </div>
            <span className="collection-count">03 MOVIES</span>
          </div>

          <MovieList movies={movies} />
        </section>
      </main>

      <footer>
        <a href="#" className="logo">
          CINE<span>VAULT</span>
        </a>
        <p>Your stories. Your collection.</p>
        <span>© 2026 CineVault</span>
      </footer>
    </div>
  );
}

export default App;