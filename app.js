import express from 'express'

const servidor = express();
servidor.use(express.json()); // permite usar parâmetros de corpo

//criando um endpoint
//var, método, caminho, request and response, arrowfunction
servidor.get('/helloworld', (req, resp) => {
    //código endpoint: oq será executado

    resp.send('Hello World!')
})

//  Parâmetros de Rota

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá, seja bem-vinde!')
})

servidor.get('/calculadora/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2;

    resp.send(soma);
})

//  Parâmetros de Query

servidor.get('calculadora/somar2', (req, resp) => {
    let n1 = Number(req.query.n1);     ///calculadora/somar2?n1=10&n2=20
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;

    resp.send(soma)
})

servidor.get('/mensagem/ola', (req, resp) => {
    let pessoa = req.query.nome ?? 'queride';
    ///mensagem/ola?nome=Maria

    resp.send('Olá, '+ nome)
})

//  Parâmetros de Corpo

servidor.post('/media', (req, resp) => {
let n1 = req.body.nota1;
let n2 = req.body.nota2

let media = (n1 +n2)/2;

resp.send(media);


// {
// "nota1": 3.5,
// "nota2": 7.5
//}
})

//vincular a API a uma porta (nesse caso, 5001)
//Se o vínculo der certo, a mensagem é exibida.
servidor.listen(5001, () => console.log("API subiu!!")) 

