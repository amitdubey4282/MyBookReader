class BooksApp extends React.Component {
  
   
   WantToReadBooks=(Books)=>
   {
      this.setState(state =>({
        WantToReadBooks=WantToReadBooks+
      }
      )
    )
   }

  render() {
  state = {
  Books: [],
  Section: [],
  showSearchPage: false
  }
  WantToReadBooks: [];
  CurrentlyReadingBooks: [];
  
    return (
     <div>
    <Bookshelf
            OnMoveTo={this.MoveTo}
            OnWantToRead={this.WantToRead}
            OnRead={this.Read}
            Books={this.state.Books}
          />
    </div>
    )  
  }
}