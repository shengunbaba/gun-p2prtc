require('./ws-server')
const express = require('express')
const path = require('path')
const app = express()
const chalk = require('chalk')
const https = require('https')
const fs = require('fs')

app.use('/', express.static(path.join(__dirname, '../demo')))
app.use('/', express.static(path.join(__dirname, '../lib')))

const options = {
    key: fs.readFileSync(path.join(__dirname, './secret/server.key')),
    cert: fs.readFileSync(path.join(__dirname, './secret/server.crt')),
}

https.createServer(options, app).listen(3001)
console.log(chalk.blue('https://localhost:3001'))