const express = require('express');
const app = express();
const path =require('path');
const PORT = 3000;



app.get('/team', (req, res) => { 
    const filePath = path.join(__dirname, 'server3-files', 'team.html');
    res.sendFile(filePath);
}); 

app.get('/about', (req, res) => { 
    const filePath = path.join(__dirname, 'server3-files', 'about.html');
    res.sendFile(filePath);
}); 

app.get('/', (req, res) => { 
   
    res.send('<h1>El servidor funciona correctamente</h1><p>Aquí iría el contenido del mensaje</p>');
}); 

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Ruta no encontrada</p>');
});


app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});