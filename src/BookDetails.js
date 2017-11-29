import React from 'react'
import BookSearch from './BookSearch'

class BookDetails extends React.Component {
    render() {
        // console.log('a')
         console.log(this.props.book)
        return (
            <li  key={this.props.book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: ('url('+ this.props.book.imageLinks.thumbnail +')' )}}></div>
                        <div className="book-shelf-changer">
                             <select value={this.props.book.shelf} onChange={(event) => this.props.changeBookShelf( this.props.book, event.target.value)}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {this.props.book.authors && this.props.book.authors.map((author, index) => {
                       return <div key={index} className="book-authors">{author}</div>
                    })}
                  
                </div>
            </li>
        );
    }
}
export default BookDetails