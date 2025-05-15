const express = require('express');
const app = express();
const PORT = 3000;

app.get('/mensaje', (req, res) => {
    res.send('<h1>El servidor funciona correctamente</h1><p>Aquí iría el contenido del mensaje</p>');
});

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Ruta no encontrada</p>');
});

app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});