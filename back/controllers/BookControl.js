// Controladores de el back //
const Bookm = require('../models/model');
const BookCtrl = {};

// Solicitud Post //
BookCtrl.postBook = async (req,res) => {
    let books = new Bookm(req.body);
    await books.save();
    console.log(books);
    res.json('received');
}

// Solicitud Get //
BookCtrl.getBook = async (req,res) => {
    let books = await Bookm.find();
    res.json(books);
}

// Solicitud Get Parametros //
BookCtrl.get2Book = async (req,res) => {
    let book = req.params.book;
    let books = await Bookm.find({book:book});
    res.json(books);
}




module.exports = BookCtrl;