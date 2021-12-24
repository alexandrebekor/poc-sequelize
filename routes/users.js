const express = require('express')
const router = express.Router()
const controller = require('../controllers/users')
const { models } = require('../models/_db')

router.get('/', controller.index.bind(null, models.User))
router.get('/:id/user', controller.find.bind(null, models.User))
router.get('/create', controller.create)
router.post('/create', controller.store.bind(null, models.User))
// router.get('/edit/:id', controller.edit)
router.post('/edit/:id', controller.update.bind(null, models.User))
router.get('/destroy/:id', controller.destroy.bind(null, models.User))

module.exports = router