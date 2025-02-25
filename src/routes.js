const express = require('express')
const takListController = require('./controllers/takListController')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/app', takListController.index)
router.get('/app/nova-lista', takListController.create)
router.post('/app/nova-lista', takListController.save)

module.exports = router