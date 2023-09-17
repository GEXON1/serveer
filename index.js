const express = require("express")
const bodyParser = require('body-parser')

const app = express()

const jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/user', (req, res) => {
    res.status(200).json({user: {name: "semyon"}})
})

app.post('/user', jsonParser, (req, res) => {
    console.log(req.body)
    res.status(200).json({user: {name: req.body.name}})
})
  
app.listen(3000, () => {
    console.log("server is initializaed")
})