const express = require('express');
const conectarDB = require('./config/db');

// Creamos servidor
const app = express();

//Conectamos a la base de datos
conectarDB();

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
//Definimos ruta principal


app.listen(4000, () => {
    console.log('Servidor en uso....')
})
