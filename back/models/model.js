// Modelo de Datos //

const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    book:{type: String},
    date:{type: Date},
    maximun_amount:{type: String},
    maximun_price:{type: String},
    maximun_value:{type: String},
    minimun_amount:{type: String},
    minimun_price:{type: String},
    minimun_value:{type: String},

});

module.exports = mongoose.model('Book',BookSchema);
