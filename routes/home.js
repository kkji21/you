
const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'../templates/home.html'))
})

router.get('/about', (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
  res.sendFile(path.join(__dirname ,'../templates/about.html'))
})

module.exports = router