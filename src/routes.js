const express = require('express')
const takListController = require('./controllers/takListController')
const taskListModel = require('./models/taskListModel')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/app', takListController.index)
router.get('/app/nova-lista', takListController.create)
router.post('/app/nova-lista', takListController.save)

router.get('/app/:id', takListController.show)
router.post('/app/:id/nova-tarefa', takListController.addTask)
router.post('/app/:id/excluir', takListController.delete)

router.post('/app/:listId/completar/:taskId', takListController.completeTask)
router.post('/app/:listId/desfazer/:taskId', takListController.undoTask)

module.exports = router