const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require('constants')

app.use(express.static(path.join(__dirname , "static")))

app.use('/', require(path.join(__dirname, 'routes/home.js')))
// app.use('/about', require(path.join(__dirname, 'routes/about.js')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})