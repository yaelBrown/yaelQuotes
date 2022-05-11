const express = require('express')
const app = express()
const compression = require('compression')
const helmet = require('helmet')


const quotes = require('./quotes.json')
const apiVersion = 1

app.use(compression())
app.use(helmet())

app.get("/", (req, res) => res.send({"yaelQuote": quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)], "api": apiVersion}))

module.exports = app