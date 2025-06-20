const {soma, sub} = require('../services/operacoes')

function apiSomar(req, res){

    const {n1, n2} = req.body
    const somar = soma(n1,n2)
    res.status(200).send(somar)
}

function apiSub(req, res){

    const {n1, n2} = req.body
    const subt = sub(n1,n2)
    res.status(200).send(subt)
}

module.exports={apiSomar, apiSub}