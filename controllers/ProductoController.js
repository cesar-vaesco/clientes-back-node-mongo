

const Producto = require("../models/Producto");



exports.crearProducto = async (req, res) => {

    try {

        let productos;
        //Creamos nuestros productos - ya se registran en la base de dato
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {

        console.log(error)
        res.status(500).send('Hubo un error....');

    }
}

exports.obtenerProducto = async (req, res) => {

    try {

        const { nombre, categoria, ubicacion, precio } = req.body;

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }


        res.json(producto);

    } catch (error) {

        console.log(error)
        res.status(500).send('Hubo un error....');
    }
}


exports.obtenerProductos = async (req, res) => {

    try {

        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {

        console.log(error)
        res.status(500).send('Hubo un error....');
    }
}


exports.actualizarProducto = async (req, res) => {

    try {

        const { nombre, categoria, ubicacion, precio } = req.body;

        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.json(producto);

    } catch (error) {

        console.log(error)
        res.status(500).send('Hubo un error....');
    }
}
