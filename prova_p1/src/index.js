

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//Movimentei a declaração da variável routes para cima do app para manter todas as importações juntas.
//Declarei a variável port para armazenar o número da porta em que o servidor vai rodar.
//Troquei a mensagem de log do listen para indicar em qual porta o servidor está rodando.
//Usei interpolação de string para exibir o valor da variável port no log.
