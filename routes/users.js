const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
const { models } = require('../models/_db')

router.get('/', users.index.bind(null, models.User))
router.get('/:id', users.index.bind(null, models.User))
router.get('/create', users.create)
router.post('/create', users.store.bind(null, models.User))
// router.get('/edit/:id', users.edit)
router.post('/edit/:id', users.update.bind(null, models.User))
router.get('/destroy/:id', users.destroy.bind(null, models.User))

module.exports = router