// Inicio de Servidor //

const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Configuraciones
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/routes', require('./routes/routes'));

//Servidor
app.listen(app.get('port') , () =>{
    console.log('Server on port 3001',app.get('port'));
});