import PropTypes from "prop-types";

const Book = ({ changeShelf, bookData }) => {
  const handleChange = (event) => {
    const selectedShelf = event.target.value;
    const updatedBookData = { ...bookData, shelf: selectedShelf };
    changeShelf(updatedBookData);
  };

  const checkMark = "\u2713";

  return (
    <li key={bookData.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${bookData.imageLinks.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleChange} value={bookData.shelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                {bookData.shelf === "currentlyReading" ? checkMark : null}
                Currently Reading
              </option>
              <option value="wantToRead">
                {bookData.shelf === "wantToRead" ? checkMark : null}
                Want to Read
              </option>
              <option value="read">
                {bookData.shelf === "read" ? checkMark : null}
                Read
              </option>
              <option value="none">
                {bookData.shelf === "none" ? checkMark : null}
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookData.title}</div>
        <div className="book-authors">{bookData.authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  bookData: PropTypes.object.isRequired,
};

export default Book;
