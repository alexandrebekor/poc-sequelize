const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('poc-sequelize', 'postgres', 'admin', {
    host: 'localhost',
    port: '5433',
    dialect: 'postgres'
})

const connect = async () => {
    try {
        await sequelize.authenticate()
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}

connect()