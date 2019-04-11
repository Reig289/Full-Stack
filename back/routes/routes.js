// Especificación de las Rutas //

const express = require('express');
const router = express.Router();
const books = require('../controllers/BookControl');


//Rutas GET y POST
router.get('/getBooks', books.getBook);
router.post('/postBooks',books.postBook);
router.get('/getBooks/:book', books.get2Book);


module.exports = router;