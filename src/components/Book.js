import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.category}</td>
    </tr>
  );
}

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

Book.defaultProps = {
  id: 0,
  title: null,
  category: null,
};

export default Book;