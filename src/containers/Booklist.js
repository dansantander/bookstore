import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book'
import { removeBook } from '../actions';

const BookList = ({ books, getRidOfBook }) => {

  const handleRemoveBook = (book)=> {
    /* getRidOfBook(book) */
    console.log(book)
  } 

  return(
  <div className="booklist">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      { books.map((book)=>{
        return(
          <Book key={book.id} id={book.id} title={book.title} category={book.category} remove={handleRemoveBook}/>
          )
        })
      }
      {console.log(books)}
      </tbody>
    </table>
  </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array
};

/* PropTypes ofrece una manera de verificar dinámicamente las props de nuestros componentes */

BookList.defaultProps = {
  books: [] ,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  getRidOfBook: (book)=>{
    dispatch(removeBook(book, book.id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

