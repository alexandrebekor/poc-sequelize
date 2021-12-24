const index = async (User, req, res) => {
    try {
        const users = await User.findAll()
        res.render('users/index', {
            users
        })
    } catch (error) {
        console.log(error)
    }
}

const find = async (User, req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByPk(id)

        res.render('users/user', {
            user
        })
    } catch (error) {
        console.log(error)
    }
}

const create = async (req, res) => {
    try {
        res.render('users/create')
    } catch (error) {
        console.log(error)
    }
}

const store = async (User, req, res) => {
    try {
        const { firstName, lastName } = req.body

        const user = await User.create({
            firstName,
            lastName
        })

        res.redirect('/users')
    } catch (error) {
        res.send(error)
    }
}

const edit = (req, res) => {
    console.log('edit')
}

const update = async (User, req, res) => {
    try {
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
    } catch (error) {
        console.log(error)
    }
}

const destroy = async (User, req, res) => {
    try {
        const { id } = req.params

        const user = await User.destroy({
            where: {
                id
            }
        })

        res.send(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    index,
    find,
    create,
    store,
    edit,
    update,
    destroy
}