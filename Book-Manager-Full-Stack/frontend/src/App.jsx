import { useEffect, useState } from "react";
import { getBooks, addBook } from "./api/bookApi";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./App.css";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
        });
    }, []);

    const handleAddBook = async (book) => {
        const newBook = await addBook(book);

        setBooks((previousBooks) => [
            ...previousBooks,
            newBook
        ]);
    };

    return (
        <main className="app-container">
            <header className="topbar">
                <a href="#" className="brand">
                    <span className="brand-icon">B</span>
                    BookVault
                </a>

                <span className="topbar-label">
                    YOUR PERSONAL LIBRARY
                </span>
            </header>

            <section className="welcome-section">
                <div>
                    <p className="eyebrow">YOUR READING SPACE</p>

                    <h1>
                        Every book has a <span>story.</span>
                    </h1>

                    <p className="welcome-description">
                        Keep your favorite books organized
                        in one beautiful place.
                    </p>
                </div>

                <div className="library-stat">
                    <span className="stat-icon">▤</span>
                    <div>
                        <strong>{books.length}</strong>
                        <p>Books collected</p>
                    </div>
                </div>
            </section>

            <section className="content-grid">
                <div className="form-panel">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">NEW ADDITION</p>
                            <h2>Add a book</h2>
                        </div>

                        <span className="heading-icon">+</span>
                    </div>

                    <BookForm onAddBook={handleAddBook} />
                </div>

                <div className="books-panel">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">YOUR COLLECTION</p>
                            <h2>My Books</h2>
                        </div>

                        <span className="book-count">
                            {books.length} TOTAL
                        </span>
                    </div>

                    <BookList books={books} />
                </div>
            </section>

            <footer className="footer">
                <p>BookVault © 2026</p>
                <p>Built for people who love reading.</p>
            </footer>
        </main>
    );
}

export default App;
