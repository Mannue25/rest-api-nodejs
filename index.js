require('dotenv').config();
require('./config/database')

const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.routes')

// Inicializar el server
const app = express();
const port = process.env.PORT || 3000;


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Rutas
app.use('/api/users', router);

// Arrancar el Server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
});