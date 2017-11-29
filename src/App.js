import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    books: undefined
  }

  constructor(props) {
    super(props);
    this.changeBookShelf = this.changeBookShelf.bind(this);
  } 

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({books: data});
    });
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((data) => {
     this.updateShelf(book, shelf);

    }
    )
  }

  updateShelf(book, shelf) {
  
    
  }
  filterBooks() {
    this.currentlyReading = this.state.books && (this.state.books.filter((book) => book.shelf === 'currentlyReading'));
    this.wantToRead = this.state.books && (this.state.books.filter((book) => book.shelf === 'wantToRead'));
    this.read = this.state.books && (this.state.books.filter((book) => book.shelf === 'read'));
    console.log(this.currentlyReading);
  
  }
  render() {
    this.filterBooks();
    console.log(this.state.books);
    return (
      <div className="app">
        <Route exact
          path="/"
          render={() =>
            <BookShelf
              currentlyReading={this.currentlyReading}
              wantToRead={this.wantToRead}
              read={this.read}
              changeBookShelf={this.changeBookShelf}
            />
          }
        />
        <Route path="/search" render={() => (<BookSearch
           changeBookShelf={this.changeBookShelf }
           shelvedBooks={this.state.books}

         />)} />

      </div>
    )
  }
}

export default BooksApp
