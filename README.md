# node-express-basic-mvc-structure
Estructura inicial de proyecto con node y express, utilizando patrón de diseño MVC. 

## Creación rápida de estructura básica MVC en NodeJs con Express

### Preparando proyecto
1. Dentro de nuestra carpeta / proyecto crearemos un archivo **app.js**.
2. Desde líneas de comando nos situamos en la carpeta / proyecto e inicializamos un proyecto con ***npm init -y***
3. También desde líneas de comando instalamos express con ***npm i express***
4. Instalamos nodemon con ***npm i nodemon --save-dev***
5. Abrimos el archivo *package.json*, que se nos creó en el raíz de nuestro proyecto, y agregamos al objeto JSON **"Scripts"** las propiedades: **"start": "node app.js"** y **"startdev": "nodemon app.js"**. Y nos quedará así: 
~~~
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "startDev": "nodemon app.js"
  },
~~~
6. Vamos a necesitar ignorar la carpeta node_modules para que esta no se cargue al repositorio remoto en Github: Creamos un archivo **.gitignore** en el raíz del proyecto y dentro del archivo agregamos una línea con el nombre de la carpeta que queremos omitir, **node_modules**.

### Estructura de archivos y carpetas
Vamos a crear una estructura completa de carpetas y luego agregaremos cada archivo según vamos necesitando.
En el raíz del proyecto creamos las siguientes carpetas:
- controllers
- data
- models
- public
- routes
- views

### Iniciando servidor
1. En nuestro entry point *"appjs"* vamos a requerir express
~~~
const express = require('express');
~~~
2. Ejecutamos express y guardamos el resultado en una constante *app*
~~~
const app = express();
~~~
#### Ahora con la constante *"app"* vamos a útilizar métodos para indicar a express comportamientos y acciones
3. Indicamos a express que vamos a usar la carpeta *"public"* de l raíz para alojar todos los archivos de acceso público. Ej: carpetas y archivos **css\style.css** y **js\script.js**
~~~
app.use(express.static('public'));
~~~

4. Indicamos a express que vamos a escuchar en el puerto **3000** las peticiones.
~~~
app.listen(3000, ()=> { 
    console.log("Servidor escuchando en puerto 3000") 
});
~~~
*Estamos además pasando un callback para mostrar en consola que el servicio ya esta corriendo y escuchando el puerto 3000*

5. Vamos a atajar y responder a una petición por *get*
~~~
app.get('/', (req, res) => res.send("Home Works"));
~~~

6. Probamos nuestro servidor funciona. Desde terminal ejecutamos ***npm run startdev*** y deberíamos ver en consola el mensaje que incluimos antes ***Servidor escuchando en puerto 3000***.
~~~
npm run startdev
~~~

7. Probamos responde a las peticiones, para esto abrimos un navegador y escribimos en la barra de direcciones ***localhost:3000*** ó en línea de comando 
~~~
start http://localhost:3000
~~~

### Rutas
Para crear rutas, inicialmente, vamos a crearlas dentro del mismo app.js
- Esuchando "***/products***"
~~~
app.get('/products', (req, res) => {
    res.send("Listado de productos");
});
~~~
- Escuchando "***/products/1***", donde obtendremos el detalle de un producto pasando el ID del mismo como parametro en la ruta. "***/products/id***".
~~~
app.get('/products/:id', (req, res) => {
    res.send("Detalle del producto " + req.params.id );
});
~~~

