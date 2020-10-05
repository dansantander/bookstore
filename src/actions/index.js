const createBook = (book) => {
  return {
    type: 'ADD_BOOK',
    book
  }
}

const removeBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    book
  }
}

export { createBook, removeBook };