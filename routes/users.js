const express = require('express')
const router = express.Router()
const users = require('../controllers/users')

router.get('/', users.index)
router.post('/', users.store)
router.post('/:id', users.update)
router.get('/create', users.create)
router.get('/destroy/:id', users.destroy)

module.exports = router