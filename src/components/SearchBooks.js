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
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSearch(value);
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
          {books
            .filter((b) => {
              return b;
            })
            .map((book) => {
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
