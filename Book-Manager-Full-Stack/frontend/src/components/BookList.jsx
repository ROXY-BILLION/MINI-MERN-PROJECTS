function BookList({ books }) {
    if (books.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">▤</div>
                <h3>Your library is empty</h3>
                <p>Add your first book to start building your collection.</p>
            </div>
        );
    }

    return (
        <div className="book-list">
            {books.map((book, index) => (
                <article className="book-card" key={book.id}>
                    <div className="book-icon">
                        <span>▤</span>
                    </div>

                    <div className="book-details">
                        <span className="book-number">
                            BOOK {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>{book.title}</h3>
                        <p>By {book.author}</p>
                    </div>

                    <span className="book-arrow">↗</span>
                </article>
            ))}
        </div>
    );
}

export default BookList;
