import { useState } from "react";

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !director.trim()) return;

    onAddMovie({
      title: title.trim(),
      director: director.trim()
    });

    setTitle("");
    setDirector("");
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;