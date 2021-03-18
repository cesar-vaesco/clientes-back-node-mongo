//Rutas para producto

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/ProductoController');

//api/productos
router.get('/', productoController.obtenerProductos);

router.get('/:id', productoController.obtenerProducto);

router.post('/', productoController.crearProducto);

router.put('/:id', productoController.actualizarProducto);

module.exports = router
