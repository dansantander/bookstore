import React from 'react';

const categoryFilter = ({change}) => {
  const CATEGORIES = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return(
    <select onChange={event =>{change(event.target.value);}}>
        {CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
    </select>
  );
}

export default categoryFilter;