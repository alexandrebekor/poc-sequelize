// import server
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// import routes
const routePages = require('./routes/pages')
const routeUsers = require('./routes/users')

// import database
const { Sequelize } = require('sequelize')

// SERVER
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// assets
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
app.use('/', routePages)
app.use('/users', routeUsers)

// DATABASE
const sequelize = new Sequelize('poc-sequelize', 'postgres', 'admin', {
    host: 'localhost',
    port: '5433',
    dialect: 'postgres'
})

const connect = async () => {
    try {
        await sequelize.authenticate()
            .then(app.listen(port))
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}

connect()