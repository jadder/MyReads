import "./App.css";
import { useEffect, useState } from "react";
import Shelf from "./components/Shelf";
import SearchBooks from "./components/SearchBooks";
import AddBook from "./components/AddBook";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const shelfs = ["currentlyReading", "wantToRead", "read"];

  //side effect to call the Book API
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response);
    };
    getBooks();
  }, []);

  const changeShelf = (bookToChange) => {
    const bookIndex = books.find((book) => book.id === bookToChange.id);
    bookIndex.shelf = bookToChange.shelf;
    setBooks([...books]);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks
          books={[...books]}
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
          changeShelf={changeShelf}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              {shelfs.map((shelf) => {
                return (
                  <Shelf
                    key={shelf}
                    shelf={shelf}
                    books={[...books]}
                    changeShelf={changeShelf}
                  />
                );
              })}
            </div>
          </div>

          <AddBook
            showSearchPage={showSearchPage}
            setShowSearchpage={setShowSearchpage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
