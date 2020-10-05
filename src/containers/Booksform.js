import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

function Bookform() {

  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  return(
  <form className="bookform">
    <label>Title</label>
    <input></input>

    <label>Category</label>
    <select className="category">
      { categories.map( category => {
            <option value={category}>{category}</option>
          }
        )
      }
    </select>
    <button type="submit">Submit</button>
  </form>
  )
}

export default Bookform;