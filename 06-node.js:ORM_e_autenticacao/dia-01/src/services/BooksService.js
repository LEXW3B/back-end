const { Book } = require('../database/models');

const getAll = async() => {
  const books = await Book.findAll();// findAll recupera todos
  return books;
};

const getById = async(id) => {
  const bookId = await Book.findByPk(id);// findByPk recupera pelo id
  return bookId;
};

module.exports = {
  getAll,
  getById,
};
