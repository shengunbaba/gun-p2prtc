require('./ws-server')
const express = require('express');
const path = require('path')
const app = express()
const chalk = require('chalk');

app.use('/', express.static(path.join(__dirname, '../demo')))
app.use('/', express.static(path.join(__dirname, '../lib')))

app.listen(3000, () => {
    console.log(chalk.blue('http://localhost:3000'));
})


