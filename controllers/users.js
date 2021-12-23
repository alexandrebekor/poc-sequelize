const { models } = require('../models/_db')

const index = (req, res) => {
    res.render('users/index')
}

const create = (req, res) => {
    res.render('users/create')
}

const store = async (req, res) => {
    const { firstName, lastName } = req.body

    await models.User.create({
        firstName,
        lastName
    })

    res.send({
        firstName,
        lastName
    })
}

const update = async (req, res) => {
    const { id } = req.params
    const { firstName, lastName } = req.body

    await models.User.update({
        firstName,
        lastName
    }, {
        where: {
            id
        }
    })

    res.send({
        firstName,
        lastName,
        id
    })
}

const destroy = async (req, res) => {
    const { id } = req.params

    await models.User.destroy({
        where: {
            id
        }
    })

    res.send({
        id
    })
}

module.exports = {
    index,
    create,
    store,
    update,
    destroy
}