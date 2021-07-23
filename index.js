const express = require('express');
const app = express();
const porta = 3000;

const mensagens = [
  "mensagem 1",
  "mensagem 2"  
];
//[GET] / hello - manda um hello world
app.get('/hello', (req, res) =>{
    res.send("Hello World");
})
//[GET] /mensagens - envia as mensagens
app.get('/mensagens', (req,res) =>{
    res.send(mensagens);
})
//[GET] /mensagens:id - retorna uma mensagem
app.get('/mensagens/:id', (req,res) =>{
    const id = req.params.id;
    const mensagem = mensagens[id];
    res.send(mensagem)
})


app.listen(porta, ()=>{
    console.info(`App rodando em http://localhost:${porta}`);
})