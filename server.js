const express = require('express')
const app = express()

const quotes = require('./quotes.json')
const apiVersion = 1

app.get("/", (req, res) => res.send({"yaelQuote": quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)], "api": apiVersion}))

module.exports = app