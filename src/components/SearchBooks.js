import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import { useState } from "react";

const SearchBooks = ({
  books,
  showSearchPage,
  setShowSearchpage,
  changeShelf,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value.trim());
  };

  const [search, setSearch] = useState("");
  const showingBooks = () => {
    if (search === "") {
      return books;
    } else {
      const books_filter = books.filter((b) => {
        const combintedAuthors = b.authors.join(", ").toLowerCase();
        return (
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          combintedAuthors.includes(search.toLowerCase())
        );
      });
      return books_filter;
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks().map((book) => {
            return (
              <Book key={book.id} bookData={book} changeShelf={changeShelf} />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  showSearchPage: PropTypes.bool.isRequired,
  setShowSearchpage: PropTypes.func.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
