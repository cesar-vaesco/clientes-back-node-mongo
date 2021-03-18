const express = require('express');
const conectarDB = require('./config/db');

// Creamos servidor
const app = express();

//Conectamos a la base de datos
conectarDB();

//Middleware: express traduce el dato que recibe y lo entrega en formato json
app.use(express.json());


//Definimos ruta principal
app.use('/api/productos', require('./routes/producto'));

//Configurando puerto del servidor
app.listen(4000, () => {
    console.log('Servidor en uso....')
})
