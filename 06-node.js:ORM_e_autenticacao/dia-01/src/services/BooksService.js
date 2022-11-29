const { Book } = require('../database/models');

const getAll = async() => {
  const books = await Book.findAll();// findAll recupera todos
  return books;
};

const getById = async(id) => {
  const bookId = await Book.findByPk(id);// findByPk recupera pelo id
  return bookId;
};

const create = async({ title,author, pageQuantity }) => {
  const bookCreate = await Book.create({ title,author, pageQuantity });
  return bookCreate;
};

module.exports = {
  getAll,
  getById,
  create,
};
