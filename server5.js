const express = require('express');
const app = express();
const path =require('path');
const PORT = 3000;
const isPalindrome = require('is-palindrome');

app.get("/check/", (req, res) => {
    const palabra = req.query.palabra;
    const result = isPalindrome(palabra);
    // if (palindrome(word)) {
   // res.send(`✅ La palabra "${word}" es un palíndromo.`);
 // } else {
  //  res.send(`❌ La palabra "${word}" NO es un palíndromo.`);
  //}
const message = `La palabra'${palabra} '${result ? '✅ es' : '❌ NO es'} un palíndromo.`;
  res.send(message);
});

app.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1><p>Ruta no encontrada</p>');
});


app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});