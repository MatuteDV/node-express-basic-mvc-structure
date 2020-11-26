// Desde este ruteador atenderemos las peticiones a '/products', 
// por lo que las rutas aquí indicadas atenderan a las rutas '/products' + (lo indicado en cada ruta). (*)

const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController');    // requerimos el controlador. 

// --- Código modularizado con controlador
router.get('/', controller.index);          //  ------   (*) Atendemos a '/products' + '/'      --> '/products/'
router.get('/:id', controller.detail);      //  ------   (*) Atendemos a '/products' + '/:id'   --> '/products/:id'


// --- Código sin modularizar controlador

// router.get('/', (req, res) => {
//     res.send('Listado de productos');
// });

// router.get('/:id', (req, res) => {
//     res.send("Detalle del producto " + req.params.id );
// });

module.exports = router;