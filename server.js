const express = require('express')
const app = express()
const { greeting } = require('./user')

app.get('/hello', (req, res) => res.send('hello, semuanya wargi indonesia raya kacida!'))
app.get('/a', (req, res) => res.send('Hello World!'))
// app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req, res) => res.send('Hello, youtube indonesia!'))
// app.get('/hello/:name', (req,res) => {
//     res.json({message:greeting(req.params.name)})
// })
module.exports = app
