const CREATE_BOOK = 'CREATE_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'
const CHANGE_FILTER  = 'CHANGE_FILTER '

const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    book
  }
}

const removeBook = (book, id) => {
  return {
    type: 'REMOVE_BOOK',
    book,
    id,
  }
}

const changeFilter = (category) => {
  return {
    type: 'CHANGE_FILTER ',
    category,
  }
}

export { createBook, removeBook, changeFilter, CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };