import PropTypes from "prop-types";
import Book from "./Book";

const Shelf = ({ shelf, books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf)
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

Shelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Shelf;
