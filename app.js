const express = require('express');
const app = express();

const productsRoutes = require('./routes/productsRoutes');  // Requerimos las rutas configuradas en /products/productsRoutes.js

// Rutas
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use('/products', productsRoutes);
// --- Al modularizar las rutas de '/products' eliminamos las líneas comentadas debajo e indicamos a express que usaremos productsRoutes con la línea de arriba.
// app.get('/products', (req, res) => {
//     res.send('Listado de productos');
// });

// app.get('/products/:id', (req, res) => {
//     res.send("Detalle del producto " + req.params.id );
// });

// -- Desafío:
//  Responder a las peticiones de ruta '/categories'
//  utilizando la estructura MVC planteada de ejemplo.
//
//  Nota: En '/data' se encuentra un JSON con categorías

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));