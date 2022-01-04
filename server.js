const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const quotes = require('./quotes.json')
const apiVersion = 1

app.get("/", (req, res) => res.send({"yaelQuote": quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)], "api": apiVersion}))

app.listen(port)
console.log("Server is running on port: " + port.toString())