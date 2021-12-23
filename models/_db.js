const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('poc-sequelize', 'postgres', 'admin', {
    host: 'localhost',
    port: '5433',
    dialect: 'postgres'
})

const users = require('./users')
const User = users(sequelize, DataTypes)

module.exports = {
    sequelize,
    models: {
        User
    }
}