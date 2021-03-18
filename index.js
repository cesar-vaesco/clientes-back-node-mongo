const express= require('express');

// Creamos servidor

const app = express();

//Definimos ruta principal

app.get('/', (req, res) =>{
    res.send('Hola mundo');
})
app.listen(4000, () =>{
    console.log('Servidor en uso....')
})
