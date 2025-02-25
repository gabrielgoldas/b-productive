const express = require('express')
const takListController = require('./controllers/takListController')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/app', takListController.index)

module.exports = router