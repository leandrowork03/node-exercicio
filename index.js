const express = require('express')
const { apiSomar, apiSub } = require('./api/operacoes')

const app = express()
app.use(express.json())

app.post('/soma', apiSomar)
app.post('/sub', apiSub)

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