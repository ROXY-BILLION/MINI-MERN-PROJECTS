import { useState } from "react";

function BookForm({ onAddBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        await onAddBook({ title, author });

        setTitle("");
        setAuthor("");
    };

    return (
        <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="book-title">Book title</label>

                <input
                    id="book-title"
                    type="text"
                    placeholder="e.g. Atomic Habits"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="book-author">Author</label>

                <input
                    id="book-author"
                    type="text"
                    placeholder="e.g. James Clear"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    required
                />
            </div>

            <button type="submit" className="add-book-btn">
                <span>+</span> Add to collection
            </button>
        </form>
    );
}

export default BookForm;
