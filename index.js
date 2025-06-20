const express = require('express')
const {soma, sub} = require('./exercicios')

const app = express()
app.use(express.json())

app.post('/soma', (req, res)=>{

    const {n1, n2} = req.body
    const somar = soma(n1,n2)
    res.status(200).send(somar)
})
app.post('/sub', (req, res)=>{

    const {n1, n2} = req.body
    const subt = sub(n1,n2)
    res.status(200).send(subt)
})

app.listen(3001)


/*

const express = require('express')

const app = express()
app.use(express.json())

app.post('/somar', (req, res)=>{
    const {num1, num2} = req.body
    res.send(`A soma é: ${num1 + num2}`)
})

app.listen(3000)*/




/*const express = require('express')

const api = express()

api.get('/', (req, res)=>{
    const {num, num2} = req.query
    res.send('A soma é ' + (Number(num) + Number(num2) ))
})

api.listen(3000)*/




/*const express = require('express')

const app = express()

app.get('/api/:id', (req, res)=>{
    const id = req.params.id
    res.send("Hello World! " + id)
})

app.listen(3000, ()=>{
    console.log('ok')
})*/