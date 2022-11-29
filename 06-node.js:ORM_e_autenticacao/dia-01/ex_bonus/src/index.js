const express = require('express');
const BookController = require('./controller/BookController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
app.get('/books', BookController.getAll);
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));