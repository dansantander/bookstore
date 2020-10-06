import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book'

const BookList = ({ books }) => {

  console.log(books)
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
          <Book id={book.id} title={book.title} category={book.category}/>
          )
        })
      }
      </tbody>
    </table>
  </div>
  )
}

BookList.propTypes = {
  books: PropTypes.array
};

/* PropTypes ofrece una manera de verificar dinámicamente las props de nuestros componentes */

/* BookList.defaultProps = {
  books: [] ,
}; */

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);

