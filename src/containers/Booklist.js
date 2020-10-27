import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book'
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, filter, getRidOfBook, changeFilter }) => {
  console.log('inside Booklist')
  // console.log(filter) // Returns 'All' when first shown
  const handleRemoveBook = (book)=> {
    getRidOfBook(book);
    /* console.log(book) */
  } 

  const handleFilterChange = (filter)=> {
    console.log('inside filter change')
    console.log(filter)
    changeFilter(filter)
  }

  const showBook =(book)=> {
    if(filter === 'All'){
      return true;
    }
    if(filter ===  book.category){
      return true;
    }
    return false
  }

  return(
  <div className="booklist">
    <CategoryFilter change={handleFilterChange}/>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      { books.filter((book)=>(showBook(book))).map((book)=>{
        return(
          <Book key={book.id} id={book.id} title={book.title} category={book.category} remove={handleRemoveBook}/>
          )
        })
      }
      {/* { books.map((book)=>{
        return(
          <Book key={book.id} id={book.id} title={book.title} category={book.category} remove={handleRemoveBook}/>
          )
        })
      } */}
      {/* {console.log(books)} */}
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
  filter: '',
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  getRidOfBook: (book)=>{
    dispatch(removeBook(book, book.id))
  },

  changeFilter: (filter)=>{
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

