function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <h3>{movie.title}</h3>
          <h3>{movie.director}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieList;