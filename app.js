import express from 'express'

const servidor = express();

//criando um endpoint
//var, método, caminho, request and response, arrowfunction
servidor.get('/helloworld', (req, resp) => {
    //código endpoint: oq será executado

    resp.send('Hello World!')
})

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá, seja bem-vinde!')
})

//vincular a API a uma porta (nesse caso, 5001)
//Se o vínculo der certo, a mensagem é exibida.
servidor.listen(5001, () => console.log("API subiu!!")) 

