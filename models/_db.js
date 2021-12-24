const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('poc-sequelize', 'postgres', 'admin', {
    host: 'localhost',
    port: '5433',
    dialect: 'postgres'
})

const users = require('./users')
const User = users(sequelize, DataTypes)

const categories = require('./categories')
const Category = categories(sequelize, DataTypes)

// RELATIONSHIP
Category.hasMany(User)

module.exports = {
    sequelize,
    models: {
        User,
        Category
    }
}