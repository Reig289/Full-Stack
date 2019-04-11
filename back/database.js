// Conexión con la DB //

const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/books';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;