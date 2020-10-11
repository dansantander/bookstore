import React from 'react';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import { connect } from 'react-redux';

/* const Bookform = () => {
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
} */

class Booksform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    //const { title, category } = this.state;
    const newBook = {
      id: parseInt(Math.random() * 1000, 10),
      title: this.state.title,
      category: this.state.category
    }

    this.props.createBook(newBook)

    this.setState({
      title: '',
      category: '',
    })
  }

  render() {
    const CATEGORIES = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

    return(
      <form id="Form" onSubmit={this.handleSubmit}>
        <label htmlFor="Form">Title
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="Form">Category
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            { CATEGORIES.map( category =>(
                <option key={category} value={category}>{category}</option>
              )
            )}
          </select>
        </label>
        <button type="submit">Submit</button>
        <h1>{this.state.title}</h1>
        <h1>{this.state.category}</h1>
      </form>
    )
  }
}

const matchDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

Booksform.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const connection = connect(null, matchDispatchToProps)(Booksform)

export default connection;