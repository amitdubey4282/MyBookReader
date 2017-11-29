
import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookDetails from './BookDetails'
import App from './App'

class BookSearch extends React.Component {
  state = {
    booksSearched: undefined,
    query: ''
  }
  updateBookShelves(books) {
    books && (books.map((book) => {
      book.shelf = 'none';
      this.props.shelvedBooks && (this.props.shelvedBooks.map((shelvedBook) => {
        shelvedBook.id === book.id && (book.shelf = shelvedBook.shelf)
      }))
    }))
    this.setState({ booksSearched: books });

  }

  searchBooks() {
    BooksAPI.search(this.state.query, 20).then((books) => {
      {

        this.updateBookShelves(books);

      }
      // console.log(books)
      this.setState({ booksSearched: books });

    });
  }
  changeQuery = (query) => {
    this.setState({ query: query.trim() }, this.searchBooks);

    // console.log(this.state.booksSearched);
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search"> Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.changeQuery(event.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksSearched && this.state.booksSearched.map((book) => {
              return <div id={book.id}><BookDetails book={book}
                changeBookShelf={this.props.changeBookShelf}
              /></div>


            })
            }
          </ol>
        </div>
      </div>

    )

  }
}
export default BookSearch