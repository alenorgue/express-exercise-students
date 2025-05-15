const express = require('express');
const app = express();
const path =require('path');
const PORT = 3000;
const {palindrome} = require('./utils/palindrome');

app.get("/check/:word", (req, res) => {
    const word = req.params.word;
    const result = palindrome(word);
    // if (palindrome(word)) {
   // res.send(`✅ La palabra "${word}" es un palíndromo.`);
 // } else {
  //  res.send(`❌ La palabra "${word}" NO es un palíndromo.`);
  //}
const message = `La palabra'${word} '${result ? '✅ es' : '❌ NO es'} un palíndromo.`;
  res.send(message);
});

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Ruta no encontrada</p>');
});


app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});