const {soma, sub} = require('../services/operacoes')

function apiSomar(req, res){

    try{
        const {n1, n2} = req.body
    const somar = soma(n1,n2)
    res.status(200).send(somar)
    }catch (e){
        res.status(500).send(e.message)
    }
}

function apiSub(req, res){

    try{
        const {n1, n2} = req.body
    const subt = sub(n1,n2)
    res.status(200).send(subt)
    }catch (e){
        res.status(500).send(e.message)
    }
}

module.exports={apiSomar, apiSub}