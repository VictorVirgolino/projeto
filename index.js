const express = require('express');
const app = express();
const porta = 3000;

app.get('/hello', (req, res) =>{
    res.send("Hello World");
})


app.listen(porta, ()=>{
    console.info(`App rodando em http://localhost:${porta}`);
})