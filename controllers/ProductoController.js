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
