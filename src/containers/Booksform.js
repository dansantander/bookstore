import React from 'react';

const Bookform = () => {
  const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  return(
  <form className="bookform">
    <label>Title</label>
    <input></input>

    <label>Category</label>
    <select className="category">
      { CATEGORIES.map( category => 
            <option key={parseInt(Math.random() * 1000, 10)} value={category}>{category}</option>
        )
      }
    </select>
    <button type="submit">Submit</button>
  </form>
  )
}

export default Bookform;