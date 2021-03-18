const express = require('express');
const conectarDB = require('./config/db');

// Creamos servidor
const app = express();

//Conectamos a la base de datos
conectarDB();


app.use('/api/productos', require('./routes/producto'));
//Definimos ruta principal

app.get('/', (req, res) => {
    res.send('Hola mundo');
})
app.listen(4000, () => {
    console.log('Servidor en uso....')
})
