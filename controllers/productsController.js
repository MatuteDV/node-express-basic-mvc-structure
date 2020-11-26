const productModel = require('../models/productsModel');

module.exports = {
    index: (req, res) => {
        // res.send('Listado de productos');
        return res.send( productModel.getProductList() );
    },
    detail: (req, res) => {
        // res.send("Detalle del producto " + req.params.id );
        const id = req.params.id;
        return res.send( productModel.getProductDetail(id) );
    }
};