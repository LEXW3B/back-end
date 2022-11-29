const BookService = require('../services/BooksService');

const getAll = async(_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async(req, res) => {
  const { id } = req.params;
  const bookId = await BookService.getById(id);
  if (!bookId) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(bookId);
};

const create = async(req, res) => {
  const { title, author, pageQuantity } = req.body;
  const bookCreate = await BookService.create({ title, author, pageQuantity } );
  res.status(201).json(bookCreate);
};

const update = async(req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedUser = await BookService.update(id, { title, author, pageQuantity });
  if (!updatedUser) return res.status(404).json({ message: 'Book not found' });
  res.status(201).json({ messsage: 'Book updated' });
};

const remove = async(req, res) => {
  const { id } = req.params;
  const removed = await BookService.remove(id);
  if (!removed) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json({ messsage: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
