const BookService = require('../services/BooksService');

const getAll = async(_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async(req, res) => {
  // const { id } = req.params;
  const bookId = await BookService.getById(req.params.id);
  if (!bookId) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(bookId);
};

module.exports = {
  getAll,
  getById,
};
