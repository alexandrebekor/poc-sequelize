const index = async (User, req, res) => {
    const { id } = req.params
    if (id) {
        const user = await User.findAll({
            where: {
                id
            }
        })
        res.send(user)
    }

    const users = await User.findAll()
    res.render('users/index', {
        users
    })
}

const create = (req, res) => {
    res.render('users/create')
}

const store = async (User, req, res) => {
    const { firstName, lastName } = req.body

    const user = await User.create({
        firstName,
        lastName
    })

    res.redirect('/users')
}

const update = async (User, req, res) => {
    const { id } = req.params
    const { firstName, lastName } = req.body

    const user = await User.update({
        firstName,
        lastName
    }, {
        where: {
            id
        }
    })

    res.send(user)
}

const destroy = async (User, req, res) => {
    const { id } = req.params

    const user = await User.destroy({
        where: {
            id
        }
    })

    res.send(user)
}

module.exports = {
    index,
    create,
    store,
    update,
    destroy
}