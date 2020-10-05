import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book'

function Booklist({ books }) {
  return(
  <div className="booklist">
    <table>
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

Booklist.propTypes = {

};

const bookListConector = connect(mapDispatchToProps)(Booklist);
export default bookListConector;
