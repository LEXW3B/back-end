const { Book } = require('src/database/models'); // models do sequelize

const getAll = async() => {
  const books = await Book.findAll();

  return books;
};

module.exports = {
  getAll,
};