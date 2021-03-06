
import React from 'react'
import { Link } from 'react-router-dom'
import BookDetails from './BookDetails'

class BookShelf extends React.Component {
  render() {
       
    return (
      <  div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.currentlyReading && this.props.currentlyReading.map((singleBook) => {
                      return (<BookDetails book={singleBook} 
                       changeBookShelf={this.props.changeBookShelf}
                       />)
                    })
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.wantToRead && this.props.wantToRead.map((singleBook) => {
                      return <BookDetails book={singleBook}
                      changeBookShelf={this.props.changeBookShelf}/>
                    })
                  }

                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.read && this.props.read.map((singleBook) => {
                      return <BookDetails book={singleBook}
                      changeBookShelf={this.props.changeBookShelf}/>
                    })
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">

          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelf