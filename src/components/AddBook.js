import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddBook = ({ showSearchPage, setShowSearchpage }) => {
  return (
    <div className="open-search">
      <Link to={"/Add"} onClick={() => setShowSearchpage(!showSearchPage)}>
        Add a book
      </Link>
    </div>
  );
};

AddBook.propTypes = {
  showSearchPage: PropTypes.bool.isRequired,
  setShowSearchpage: PropTypes.func.isRequired,
};

export default AddBook;
