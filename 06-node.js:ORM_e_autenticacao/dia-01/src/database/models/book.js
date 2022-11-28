const Book = (sequelize, DataTypes) => sequelize.define('Book', {
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  pageQuantity: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {tableName: 'Book'});

module.exports = Book;